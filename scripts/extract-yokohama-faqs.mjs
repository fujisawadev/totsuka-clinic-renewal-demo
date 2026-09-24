/**
 * 旧サイト（sasakikyousei.com）のコラム記事 HTML から Q&A を抽出して JSON にする。
 *
 * 使い方: node scripts/extract-yokohama-faqs.mjs
 * 入力: docs/research/sasaki/yokohama/faq*.html（Shift-JIS の保存ファイル）
 * 出力: docs/research/yokohama-faqs.json → src/content/yokohama-faqs.json へコピーして使う
 *
 * 旧記事の HTML は 2 パターン:
 *  - 新形式: .question_ttl h2(質問) / .q_text(質問文) / .question_ttl h2(回答見出し) / .Box106(回答本文)
 *  - 旧形式: .daititlebox h2(質問) / .ClassTB3 td(質問文) / .chutitlebox h3(回答見出し) / .ClassTB6 td(回答本文)
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const dir = path.resolve(import.meta.dirname, "../docs/research/sasaki/yokohama");
const files = fs.readdirSync(dir).filter((f) => f.startsWith("faq") && f.endsWith(".html")).sort();

function readSJIS(file) {
  return execSync(`iconv -f shift_jis -t utf-8 "${file}" || cat "${file}"`).toString();
}

function decodeEntities(s) {
  return s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

/** HTML 断片 → 段落配列（<BR> と <p> で区切る） */
function toParagraphs(html) {
  return decodeEntities(
    html
      .replace(/<img[^>]*>/gi, "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/?(p|div|tr|td|table|li|ul)[^>]*>/gi, "\n")
      .replace(/<[^>]+>/g, "")
  )
    .split("\n")
    .map((l) => l.replace(/[ \t　]+/g, " ").trim())
    .filter(Boolean);
}

function textOf(html) {
  return toParagraphs(html).join(" ");
}

function pick(html, re) {
  const m = html.match(re);
  return m ? m[1] : "";
}

/** 敬称ルール: 「患者様」「患者さま」→「患者さん」 */
function honorific(s) {
  return s.replace(/患者様|患者さま/g, "患者さん");
}

const out = [];
let replaced = 0;
for (const f of files) {
  const slug = f.replace(/\.html$/, "");
  const date = slug.replace(/^faq/, "");
  const yyyy = date.slice(0, 4);
  const mm = date.slice(4, 6);
  const dd = date.slice(6, 8);
  const html = readSJIS(path.join(dir, f));
  const main = pick(html, /<div id="two_left_column">([\s\S]*?)<p id="page-top">/);
  if (!main) throw new Error(`本文領域が見つかりません: ${f}`);

  // q = 旧ページの <title>（検索結果に載っていた題名。メタタイトル・一覧に使う）
  // heading = ページ内の質問見出し（本文の Q. に使う。旧サイトでは title と異なる記事がある）
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  let q = titleMatch ? decodeEntities(titleMatch[1]).replace(/[｜|].*$/, "").trim() : slug;
  let heading, question, answerTitle, answer;
  if (/class="q_text"/.test(main)) {
    // 新形式
    heading = textOf(pick(main, /<h2 class="type-blue">([\s\S]*?)<\/(?:h2|div)>/));
    question = toParagraphs(pick(main, /<div class="q_text">([\s\S]*?)<\/div>/));
    answerTitle = textOf(pick(main, /<h2 class="type-orieng">([\s\S]*?)<\/h2>/));
    answer = toParagraphs(pick(main, /<div class="Box106">\s*<div class="[^"]*">([\s\S]*?)<\/div>\s*<\/div>/));
  } else {
    // 旧形式
    heading = textOf(pick(main, /<div class="daititlebox">\s*<h2>([\s\S]*?)<\/h2>/));
    question = toParagraphs(pick(main, /<div class="ClassTB3">([\s\S]*?)<\/table>/));
    answerTitle = textOf(pick(main, /<div class="chutitlebox">\s*<h3>([\s\S]*?)<\/h3>/));
    answer = toParagraphs(pick(main, /<div class="ClassTB6">([\s\S]*?)<\/table>/));
  }

  if (!q || !heading || question.length === 0 || !answerTitle || answer.length === 0) {
    throw new Error(`抽出漏れ: ${f} q=${!!q} heading=${!!heading} question=${question.length} answerTitle=${!!answerTitle} answer=${answer.length}`);
  }

  const before = [q, heading, ...question, answerTitle, ...answer].join("");
  q = honorific(q);
  heading = honorific(heading);
  question = question.map(honorific);
  answerTitle = honorific(answerTitle);
  answer = answer.map(honorific);
  const after = [q, heading, ...question, answerTitle, ...answer].join("");
  if (before !== after) replaced++;

  const firstPara = question[0];
  const excerpt = firstPara.length > 140 ? firstPara.slice(0, 140).replace(/[、。「」]$/, "") + "…" : firstPara;

  out.push({ slug, date: `${yyyy}-${mm}-${dd}`, q, heading, excerpt, question, answerTitle, answer });
}

out.sort((a, b) => b.date.localeCompare(a.date));

fs.writeFileSync(path.resolve(import.meta.dirname, "../docs/research/yokohama-faqs.json"), JSON.stringify(out, null, 2) + "\n");
console.log(`extracted ${out.length} FAQs (敬称置換あり: ${replaced} 記事)`);

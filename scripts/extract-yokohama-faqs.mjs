import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const dir = path.resolve(import.meta.dirname, "../docs/research/sasaki/yokohama");
const files = fs.readdirSync(dir).filter((f) => f.startsWith("faq") && f.endsWith(".html")).sort();

function readSJIS(file) {
  return execSync(`iconv -f shift_jis -t utf-8 "${file}" || cat "${file}"`).toString();
}

function strip(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<!--([\s\S]*?)-->/g, "")
    .replace(/<\/?(br|p|div|tr|td|th|li|h[1-6])[^>]*>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/[ \t]+/g, " ")
    .replace(/\n{2,}/g, "\n\n")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
}

const out = [];
for (const f of files) {
  const slug = f.replace(/\.html$/, "");
  const date = slug.replace(/^faq/, "");
  const yyyy = date.slice(0, 4);
  const mm = date.slice(4, 6);
  const dd = date.slice(6, 8);
  const html = readSJIS(path.join(dir, f));
  const lines = strip(html);

  // Extract title (page <title>)
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  const pageTitle = titleMatch ? titleMatch[1].replace(/[｜|].*$/, "").trim() : slug;

  // Find the question (first h2 after "FAQ")
  const fixedNav = [
    "矯正歯科で治療のあともどりに関して",
    "初診の方はこちら",
    "ささき矯正歯科クリニック",
    "横浜の矯正歯科ならお任せ下さい。",
    "歯科治療に安心の分割払い！当院ではスルガ銀行とアプラスのデンタルローンが利用出来ます。是非ご利用下さい。",
    "矯正治療について",
    "矯正治療の進め方",
    "矯正治療料金",
    "院内紹介・交通",
    "うけ口",
    "出っ歯",
    "乱杭歯・開咬",
    "外科治療",
    "抜歯について",
    "アフターケアー",
    "治療前後の比較",
    "一般的なリスク、副作用",
    "矯正装置",
    "患者さんへのお願い",
    "よくある質問",
    "リンク集",
    "FAQ",
    "PageTop",
    "トップページ",
    "Copyright(C)",
    "All Rights Reserved.",
  ];

  const filtered = lines.filter(
    (l) =>
      !fixedNav.some((n) => l.includes(n)) &&
      !l.match(/^[\s・]+$/) &&
      l.length > 8
  );

  // First long content line is usually the question, then subsequent are answer
  const question = pageTitle;
  // Find paragraphs after the question — keep a short excerpt only (lead)
  const answerLines = filtered.filter(
    (l) => l.length > 30 && !l.match(/^[A-Z]+$/) && l !== question
  );
  const firstPara = answerLines[0] || "";
  const excerpt = firstPara.length > 140 ? firstPara.slice(0, 140).replace(/[、。「」]$/, "") + "…" : firstPara;

  out.push({ slug, date: `${yyyy}-${mm}-${dd}`, q: question, excerpt });
}

out.sort((a, b) => b.date.localeCompare(a.date));

fs.writeFileSync(
  path.resolve(import.meta.dirname, "../docs/research/yokohama-faqs.json"),
  JSON.stringify(out, null, 2)
);
console.log(`extracted ${out.length} FAQs`);
console.log("Sample:", JSON.stringify(out[0], null, 2));

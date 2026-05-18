import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const dir = path.resolve(import.meta.dirname, "../docs/research/sasaki");
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".html"));

function readShiftJIS(file) {
  return execSync(`iconv -f shift_jis -t utf-8 "${file}" || cat "${file}"`).toString();
}

function htmlToText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<!--([\s\S]*?)-->/g, "")
    .replace(/<\/?(br|p|div|tr|td|th|li|h[1-6]|table)[^>]*>/gi, "\n")
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
    .filter(Boolean)
    .join("\n");
}

const out = {};
for (const f of files) {
  const html = readShiftJIS(path.join(dir, f));
  out[f] = htmlToText(html);
}

fs.writeFileSync(
  path.resolve(import.meta.dirname, "../docs/research/sasaki-text.json"),
  JSON.stringify(out, null, 2)
);
console.log("done", Object.keys(out).length, "pages");

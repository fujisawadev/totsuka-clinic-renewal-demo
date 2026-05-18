import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";

export const metadata = {
  title: "リンク集｜ささき矯正歯科クリニック",
};

const LINKS = [
  { name: "日本矯正歯科学会", url: "http://www.jos.gr.jp" },
  { name: "東京矯正歯科学会", url: "http://www.kokuhoken.or.jp/tos/index.html" },
  { name: "公益社団法人 日本臨床矯正歯科医会", url: "https://www.jpao.jp" },
];

export default function Page() {
  return (
    <SubPageLayout category="関連情報" enTitle="LINKS" jpTitle="リンク集">
      <PageSection>
        <p className="text-[14px] leading-loose text-[#222] mb-8 max-w-2xl">
          当クリニックに関わる学会や提携先のリンクです。
        </p>
        <ul className="divide-y divide-[#e3e3e3]/70 border-t border-[#e3e3e3]/70">
          {LINKS.map((l) => (
            <li key={l.name} className="py-5 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-3 lg:gap-8 items-baseline">
              <div>
                <p className="text-[15px] tracking-wider text-[#222]">{l.name}</p>
                <p className="text-[12px] text-[#9a998e] mt-1 font-mono">{l.url}</p>
              </div>
              <a
                href={l.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-block bg-[#9a998e] text-white text-xs tracking-widest px-5 py-2 hover:bg-[#b5b4a8] transition justify-self-start lg:justify-self-end"
              >
                サイトを見る →
              </a>
            </li>
          ))}
        </ul>
      </PageSection>
    </SubPageLayout>
  );
}

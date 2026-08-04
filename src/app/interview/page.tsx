import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import Photo from "@/components/Photo";

export const metadata = {
  title: "横浜ドクターズインタビュー｜ささき矯正歯科クリニック",
};

export default function Page() {
  return (
    <SubPageLayout category="メディア掲載" enTitle="INTERVIEW" jpTitle="横浜ドクターズインタビュー" heroSrc="/photos/greeting-director-wide.jpg">
      <PageSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Photo src="/photos/interview-thumb.jpg" alt="患者さんと語る院長" ratio="4/3" className="w-full" />
          <div>
            <p className="text-[#9a998e] text-xs tracking-[0.3em] mb-3">外部メディア掲載</p>
            <h2 className="text-2xl lg:text-3xl tracking-wider mb-6">
              横浜ドクターズ
            </h2>
            <p className="text-[14px] leading-loose text-[#222] mb-8">
              横浜ドクターズにて、横浜市戸塚区の矯正歯科院長としてインタビューを受けました。<br />
              ささき矯正歯科クリニックの治療方針や、患者さんに対する姿勢などについて語っています。
            </p>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-block bg-[#9a998e] text-white text-sm tracking-widest px-8 py-4 hover:bg-[#b5b4a8] transition"
            >
              横浜ドクターズの記事を見る →
            </a>
            <p className="mt-4 text-[12px] text-[#666]">※ 外部サイトに遷移します。リンクURLは差し替え予定。</p>
          </div>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}

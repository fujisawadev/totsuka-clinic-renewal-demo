import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "よくある質問｜ささき矯正歯科クリニック",
  description: "矯正治療に関するよくある質問と回答をまとめています。",
};

export default function Page() {
  return (
    <SubPageLayout category="ご相談・お問い合わせ" enTitle="FAQ" jpTitle="よくある質問">
      <PageSection>
        <p className="text-[14px] leading-loose text-[#444] mb-10 max-w-2xl">
          患者さまからよく頂く質問と回答をまとめています。こちらをご覧いただいてもご不明な点、ご心配な点などございましたら、お気軽にお問い合わせください。
        </p>
        <FAQ headless />
      </PageSection>
    </SubPageLayout>
  );
}

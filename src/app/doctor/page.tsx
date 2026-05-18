import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import Placeholder from "@/components/Placeholder";

export const metadata = {
  title: "院長紹介｜ささき矯正歯科クリニック",
};

const QUALIFICATIONS = [
  "歯科医師（昭和55年〜）鶴見大学歯学部卒業",
  "歯学博士（平成4年〜）歯科矯正学",
  "日本矯正歯科学会認定医（平成6年〜）",
];

const CAREER = [
  "鶴見大学歯学部矯正学教室 診療科助手（昭和55年〜58年）",
  "鶴見大学歯学部矯正学教室 助手（昭和58年〜62年）",
  "ささき矯正歯科クリニック 院長（昭和62年〜）",
  "鶴見大学歯学部 非常勤講師（平成15年〜平成28年）",
  "鶴見大学歯学部 臨床教授（平成28年〜令和5年）",
];

const ACADEMIC = [
  "日本矯正歯科学会 会員",
  "日本臨床矯正歯科医会 会員",
  "鶴見歯学会 会員",
];

const ORGS = [
  "日本歯科医師会",
  "神奈川県歯科医師会",
  "横浜市歯科医師会",
  "戸塚区歯科医師会",
  "酒田地区歯科医師会",
];

const ROLES = [
  "日本矯正歯科学会・理事（平成29年〜30年度）",
  "日本矯正歯科学会・代議員（平成16年〜）",
  "東京矯正歯科学会・理事（平成16年〜17年度、平成28年〜29年度）",
  "東京矯正歯科学会・副会長（平成18年〜19年度、平成30年〜31年度）",
  "東京矯正歯科学会・監事（平成18年〜19年度、令和2年〜3年度）",
  "横浜市歯科医師会 代議員（平成11年〜）",
  "戸塚区歯科医師会・委員（学術）（昭和63年〜64年度）",
  "戸塚区歯科医師会・委員（政連）（平成元年〜6年度）",
  "戸塚区歯科医師会・委員（公衆衛生）（平成元年〜）",
  "戸塚区歯科医師会・理事（厚生）（平成7年〜22年度）",
  "戸塚区歯科医師会・副会長（平成23年〜）",
  "鶴見大学歯学部歯科矯正学講座同門会・会長（平成12年〜令和元年）",
];

const REGIONAL = [
  "潮田幼稚園（鶴見区）・園歯科医（平成23年〜）",
  "YMCA とつか保育園・園歯科医（令和2年〜）",
  "YMCA とつか乳児保育園・園歯科医（令和2年〜）",
];

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-[14px] leading-loose text-[#222]">
      {items.map((i) => (
        <li key={i} className="border-b border-[#e3e3e3]/70 pb-2">{i}</li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <SubPageLayout category="医院について" enTitle="DOCTOR" jpTitle="院長紹介">
      <PageSection>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start">
          <Placeholder label="院長写真" ratio="3/4" className="w-full" />
          <div>
            <p className="text-xs text-[#9a998e] tracking-wider mb-1">日本矯正歯科学会 認定医 ／ 歯学博士</p>
            <p className="text-xs text-[#9a998e] tracking-wider">ささき矯正歯科クリニック 院長</p>
            <h2 className="mt-3 text-3xl lg:text-4xl tracking-wider">
              佐々木 光司
              <span className="ml-4 text-base text-[#9a998e]">Koji Sasaki</span>
            </h2>
            <div className="mt-8 space-y-4 text-[14px] leading-loose text-[#222]">
              <p>歯並びや噛み合わせが悪いと虫歯や歯周病になりやすく、咀嚼機能の低下や心理的な負担につながることもあります。私自身が不正咬合に悩んでいたこともあり、横浜市戸塚区で矯正歯科医の道を選びました。</p>
              <p>大学病院や一般の歯科からご紹介を頂くことも多く、患者さんはお子さんや20〜30代の方が中心です。近頃は親子二代で来院される方や、中高年の方も増えています。</p>
              <p>皆さんの歯並びが良くなるにつれ表情が明るく豊かになり、笑顔で通院いただけるようになるのを見るのは本当に嬉しい瞬間です。治療の際は、患者さんに我慢を強いるようなことは行いません。治療に対するご要望や不安は一人ひとり異なりますので、よく話し合い、個々に適した「患者さん本位の治療」を心掛けています。</p>
              <p>開業して35年以上の実績を持ち、学会でも積極的に症例を発表。大学病院では臨床教授として医局員の指導も行ってきました。戸塚歯科医師会では副会長を務め、長年地域保健委員として虫歯や歯周病予防の事業活動や矯正相談を続けています。今後も、地域の皆さまに信頼いただける医療を提供してまいります。</p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection enTitle="Qualifications" jpTitle="資格・経歴" bg="soft">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h3 className="text-base mb-4 text-[#9a998e] tracking-widest">資格</h3>
            <List items={QUALIFICATIONS} />
          </div>
          <div>
            <h3 className="text-base mb-4 text-[#9a998e] tracking-widest">経歴</h3>
            <List items={CAREER} />
          </div>
        </div>
      </PageSection>

      <PageSection enTitle="Affiliations" jpTitle="所属学会・機関">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h3 className="text-base mb-4 text-[#9a998e] tracking-widest">所属学会等</h3>
            <List items={ACADEMIC} />
          </div>
          <div>
            <h3 className="text-base mb-4 text-[#9a998e] tracking-widest">所属機関</h3>
            <List items={ORGS} />
          </div>
        </div>
      </PageSection>

      <PageSection enTitle="Roles" jpTitle="主な役職" bg="soft">
        <List items={ROLES} />
      </PageSection>

      <PageSection enTitle="Community" jpTitle="地域医療">
        <List items={REGIONAL} />
      </PageSection>

      <PageSection bg="soft">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-10 items-center">
          <div>
            <p className="text-[#9a998e] text-xs tracking-[0.3em] mb-2">関連リンク</p>
            <p className="text-[14px] leading-loose">横浜ドクターズにて、横浜市戸塚区の矯正歯科院長としてインタビューを受けました。</p>
          </div>
          <Link href="/interview/" className="inline-block bg-[#9a998e] text-white text-sm tracking-widest px-6 py-3 hover:bg-[#b5b4a8] transition w-fit lg:justify-self-end">
            インタビュー記事を見る
          </Link>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}

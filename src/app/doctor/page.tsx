import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";
import Photo from "@/components/Photo";

export const metadata = {
  title: "医師・スタッフ紹介｜ささき矯正歯科クリニック",
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

const VICE_QUALIFICATIONS = [
  "歯科医師（平成29年〜）鶴見大学歯学部卒業",
  "歯学博士（令和6年〜）歯科矯正学",
  "日本矯正歯科学会認定医（令和6年〜）",
];

const VICE_CAREER = [
  "鶴見大学歯学部矯正学教室 大学院生（平成31年〜令和4年）",
  "鶴見大学歯学部矯正学教室 非常勤研究員（令和4年〜令和8年現在）",
];

const VICE_ACADEMIC = [
  "日本矯正歯科学会 会員",
  "日本臨床矯正歯科医会 会員",
];

const VICE_REGIONAL = [
  "潮田幼稚園（鶴見区）・園歯科医（令和2年〜）",
  "YMCA とつか保育園・園歯科医（令和2年〜）",
  "YMCA とつか乳児保育園・園歯科医（令和2年〜）",
];

const CERTIFIED_DOCTORS = [
  { name: "磯野 亜由美", en: "Ayumi Isono", title: "日本矯正歯科学会 認定医", src: "/photos/doctor-isono.jpg" },
  { name: "藤沢 のぶこ", en: "Nobuko Fujisawa", title: "日本矯正歯科学会 認定医", src: "/photos/doctor-fujisawa.jpg" },
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
    <SubPageLayout category="医院について" enTitle="DOCTOR & STAFF" jpTitle="医師・スタッフ紹介" heroSrc="/photos/hero-team.jpg">
      <PageSection>
        <p className="text-[15px] leading-loose text-[#222] max-w-[59rem]">
          当院には、日本矯正歯科学会認定医の資格を持つ経験豊富なドクターと、矯正治療に精通したスタッフが在籍しています。カウンセリングから治療、日々のケアまで、チーム一丸となって患者さんに寄り添います。
        </p>
        {/* PC はページ上部のヒーローに集合写真が表示されるため、スマホのみここに掲載 */}
        <Photo
          src="/photos/hero-team.jpg"
          alt="ささき矯正歯科クリニックのドクター・スタッフ"
          ratio="3/2"
          className="mt-8 w-full lg:hidden"
        />
      </PageSection>

      <PageSection enTitle="Director" jpTitle="院長">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start">
          <Photo src="/photos/doctor-director.jpg" alt="院長 佐々木光司" ratio="3/4" className="w-full" position="top" />
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

      <PageSection enTitle="Vice Director" jpTitle="副院長">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start">
          <Photo src="/photos/doctor-vice.jpg" alt="副院長" ratio="3/4" className="w-full" position="top" />
          <div>
            <p className="text-xs text-[#9a998e] tracking-wider mb-1">日本矯正歯科学会 認定医</p>
            <p className="text-xs text-[#9a998e] tracking-wider">ささき矯正歯科クリニック 副院長</p>
            <h2 className="mt-3 text-3xl lg:text-4xl tracking-wider">
              佐々木 耀史
              <span className="ml-4 text-base text-[#9a998e]">Yoji Sasaki</span>
            </h2>
            <div className="mt-8 space-y-4 text-[14px] leading-loose text-[#222]">
              <p>このたび、長年にわたり地域の皆さまに支えていただいてきた当院で、副院長として矯正歯科診療を担当させていただくことになりました。</p>
              <p>幼い頃からこの医院を身近に感じながら育ち、たくさんの患者さまに信頼され、親しまれている姿を見てきました。今、自分自身が歯科医師としてこの地域で診療できることを、大変嬉しく思っています。</p>
              <p>矯正治療は、歯並びを整えるだけではなく、その方のこれからの生活や笑顔にも関わる大切な治療です。だからこそ、患者さま一人ひとりに親身に接し、それぞれのお悩みや希望にしっかり耳を傾けながら、納得して治療を受けていただけることを大切にしています。</p>
              <p>また、日々知識と技術を磨き、安心して通っていただける矯正歯科医療を提供してまいります。これからも患者さま一人ひとりに寄り添い、「ここで治療してよかった」と思っていただける歯科医院を目指してまいります。</p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection enTitle="Qualifications" jpTitle="副院長 資格・経歴" bg="soft">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h3 className="text-base mb-4 text-[#9a998e] tracking-widest">資格</h3>
            <List items={VICE_QUALIFICATIONS} />
            <h3 className="text-base mt-10 mb-4 text-[#9a998e] tracking-widest">所属学会等</h3>
            <List items={VICE_ACADEMIC} />
          </div>
          <div>
            <h3 className="text-base mb-4 text-[#9a998e] tracking-widest">経歴</h3>
            <List items={VICE_CAREER} />
            <h3 className="text-base mt-10 mb-4 text-[#9a998e] tracking-widest">地域医療</h3>
            <List items={VICE_REGIONAL} />
          </div>
        </div>
      </PageSection>

      <PageSection enTitle="Certified Orthodontists" jpTitle="日本矯正歯科学会認定医">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-16 max-w-3xl">
          {CERTIFIED_DOCTORS.map((d) => (
            <div key={d.name}>
              <Photo src={d.src} alt={`${d.title} ${d.name}`} ratio="3/4" className="w-full" position="top" />
              <p className="mt-5 text-xs text-[#9a998e] tracking-wider">{d.title}</p>
              <h3 className="mt-2 text-xl lg:text-2xl tracking-wider">
                {d.name}
                <span className="ml-3 text-sm text-[#9a998e]">{d.en}</span>
              </h3>
            </div>
          ))}
        </div>
        <p className="mt-10 text-[14px] leading-loose text-[#222] max-w-3xl">
          当院には、院長・副院長のほかにも日本矯正歯科学会認定医が多数在籍しています。矯正治療に精通したドクターが、患者さま一人ひとりの治療にあたります。
        </p>
        <p className="mt-6 text-[11px] text-[#9a998e] tracking-wider">※ 写真とお名前の対応は確認中です</p>
      </PageSection>
    </SubPageLayout>
  );
}

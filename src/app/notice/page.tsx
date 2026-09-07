import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";

export const metadata = {
  title: "患者さんへのお願い｜ささき矯正歯科クリニック",
};

const ITEMS = [
  { title: "矯正装置の使用方法を必ず守ってください", body: "取りはずしのできる装置や口の中で使うゴムの使用時間が短いと、治療が進まないばかりでなく、せっかく良くなった歯ならびがもとにもどることがあります。装置の使用方法・使用時間・食べてはいけないものなどの注意を守ることが、早く治ることにつながります。" },
  { title: "歯みがきを頑張ってください", body: "歯みがきをおこたると、歯ならびは改善したにもかかわらず虫歯や歯周病になってしまうことがあります。歯みがき練習を効果的に行うため、来院時にはなるべく歯みがきを行ってお越しください。" },
  { title: "予約時間を守ってください", body: "予約時間に遅れると、予定の治療が行えなくなることがあります。これが度重なると治療期間が長引くことにもつながります。やむをえず遅れる場合は早めにご連絡ください。" },
  { title: "予約日を忘れずに来院してください", body: "予約日を忘れて治療の間隔があきすぎてしまうと、治療が予定通り進まないだけでなく、歯に悪い影響が及ぶことがあります。もし予約を忘れてしまった時にはできるだけ早めにご連絡ください。" },
  { title: "予約日時の変更について", body: "曜日や時間帯によっては（土・日曜日、午後4時以降）、前後の予約がとりにくいことがあります。予約日時の変更はお早めにお願いします。" },
  { title: "受診時のお願い", body: "衛生管理のため、口紅は事前におとしてください。ロングヘアの方はなるべく束ねるようお願いします。使用している装置に関するご質問は、なるべく治療を始める前にお願いします。" },
  { title: "歯科医院に来るときの持ち物", body: "「診察予約カード」「歯ブラシとミラー」「使用中の装置」を必ずお持ちください。忘れたときは受付にお伝えください。" },
  { title: "付き添いの方へ", body: "歯科医院内は禁煙・禁飲食です。外出される場合は受付に一言お声がけください。パーキングチケットは診療終了後にお渡しします。" },
];

export default function Page() {
  return (
    <SubPageLayout category="ご来院前にお読みください" enTitle="NOTICE" jpTitle="患者さんへのお願い">
      <PageSection>
        <p className="text-[14px] leading-loose text-[#222] max-w-3xl mb-10">
          より良い治療結果を得るため、また予定どおりに治療を進めるためには、患者さんや保護者の方の協力が非常に大切です。注意事項を守り、一日も早く健康で美しい歯ならびになるように頑張ってください。
        </p>
        <ul className="space-y-6">
          {ITEMS.map((it, i) => (
            <li key={it.title} className="border-l-2 border-[#9a998e] pl-6">
              <div className="text-[11px] tracking-[0.25em] text-[#9a998e] mb-2">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-base lg:text-lg mb-2">{it.title}</h3>
              <p className="text-[13px] leading-loose text-[#444]">{it.body}</p>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection enTitle="Damage" jpTitle="装置の破損・紛失について" bg="soft">
        <p className="text-[14px] leading-loose text-[#222] max-w-3xl mb-6">
          矯正装置の中にはこわれやすいものがあります。大切に扱い、なくさないようにしてください。装置の紛失または破損については、次の費用がかかります。
        </p>
        <dl className="max-w-2xl space-y-3 text-[14px]">
          <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-[#e3e3e3] pb-2">
            <dt>再製作料（1装置につき）</dt>
            <dd className="text-[#9a998e]">¥10,000〜30,000</dd>
          </div>
          <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-[#e3e3e3] pb-2">
            <dt>修理費（1装置につき）</dt>
            <dd className="text-[#9a998e]">¥5,000〜10,000</dd>
          </div>
        </dl>
      </PageSection>
    </SubPageLayout>
  );
}

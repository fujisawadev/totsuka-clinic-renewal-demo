import Link from "next/link";
import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";

export const metadata = {
  title: "ページが見つかりません｜ささき矯正歯科クリニック",
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: "/", label: "トップページ" },
  { href: "/treatment/", label: "矯正治療について" },
  { href: "/pricing/", label: "矯正治療料金" },
  { href: "/first-visit/", label: "初診の方へ" },
  { href: "/columns/", label: "矯正歯科コラム" },
  { href: "/access-info/", label: "院内紹介・アクセス" },
];

export default function NotFound() {
  return (
    <SubPageLayout category="404" enTitle="NOT FOUND" jpTitle="ページが見つかりません">
      <PageSection>
        <div className="max-w-3xl">
          <p className="text-[14px] leading-loose text-[#222]">
            お探しのページは移動または削除された可能性があります。
            <br />
            サイトリニューアルに伴い、一部のページのアドレスが変更になりました。下記よりお探しのページをお選びください。
          </p>
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block border border-[#e3e3e3] px-5 py-4 text-[14px] tracking-wider hover:border-[#9a998e] transition"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-[13px] text-[#666] leading-loose">
            お電話でのお問い合わせ:{" "}
            <a href="tel:0458712281" className="link-underline">
              045-871-2281
            </a>
          </p>
        </div>
      </PageSection>
    </SubPageLayout>
  );
}

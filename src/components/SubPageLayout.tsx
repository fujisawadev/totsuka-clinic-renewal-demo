import Header from "./Header";
import SideActions from "./SideActions";
import FooterAccess from "./FooterAccess";
import Sitemap from "./Sitemap";
import Copyright from "./Copyright";
import RevealObserver from "./RevealObserver";
import SubPageHero from "./SubPageHero";

type Props = {
  category: string;
  enTitle: string;
  jpTitle: string;
  heroSrc?: string;
  heroPosition?: string;
  heroIllust?: string;
  children: React.ReactNode;
};

export default function SubPageLayout({ category, enTitle, jpTitle, heroSrc, heroPosition, heroIllust, children }: Props) {
  return (
    <>
      <RevealObserver />
      <Header solid homeHref="/" anchorBase="/" />
      <SideActions />
      <main className="pt-16 lg:pt-20">
        <SubPageHero category={category} enTitle={enTitle} jpTitle={jpTitle} heroSrc={heroSrc} heroPosition={heroPosition} heroIllust={heroIllust} />
        <div className="bg-white">{children}</div>
      </main>
      <footer>
        <FooterAccess />
        <Sitemap />
        <Copyright />
      </footer>
    </>
  );
}

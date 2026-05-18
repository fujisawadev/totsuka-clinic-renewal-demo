import Header from "@/components/Header";
import SideActions from "@/components/SideActions";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Greeting from "@/components/Greeting";
import Concept from "@/components/Concept";
import Treatment from "@/components/Treatment";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Counseling from "@/components/Counseling";
import Clinic from "@/components/Clinic";
import FooterAccess from "@/components/FooterAccess";
import Sitemap from "@/components/Sitemap";
import Copyright from "@/components/Copyright";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Header />
      <SideActions />
      <main>
        <Hero />
        <News />
        <Greeting />
        <Concept />
        <Treatment />
        <Pricing />
        <FAQ />
        <Counseling />
        <Clinic />
      </main>
      <footer>
        <FooterAccess />
        <Sitemap />
        <Copyright />
      </footer>
    </>
  );
}

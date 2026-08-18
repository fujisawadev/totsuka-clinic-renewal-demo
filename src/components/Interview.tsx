import Photo from "./Photo";

export default function Interview() {
  return (
    <section className="bg-white pt-16 lg:pt-32 pb-16 lg:pb-40">
      <div className="container-clinic">
        <div className="anim flex flex-col items-start gap-1 lg:flex-row lg:items-end lg:gap-8 mb-8 lg:mb-12">
          <h2 className="section-eyebrow">Interview</h2>
          <span className="text-[13px] lg:text-[14px] text-[#9a998e] tracking-wider lg:pb-2">メディア掲載</span>
        </div>

        <div className="anim anim-delay-1">
          <a
            href="https://kanagawa-doctors.com/dentalList/59410"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
          >
            <Photo
              src="/photos/banner-yokohama-doctors.jpg"
              alt="横浜ドクターズインタビュー"
              className="w-full max-w-[480px] border border-[#e3e3e3]/70 transition-opacity group-hover:opacity-80"
            />
          </a>
          <p className="mt-5 text-[13px] leading-loose text-[#444]">
            横浜ドクターズにて、当院院長のインタビュー記事が掲載されています。
          </p>
        </div>
      </div>
    </section>
  );
}

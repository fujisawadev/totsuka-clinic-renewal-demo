export default function Copyright() {
  return (
    <div className="bg-[#0d0d0d] text-white/50 text-xs py-4">
      <div className="container-clinic flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© ささき矯正歯科クリニック All Rights Reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">
            治療に関するご注意
          </a>
          <span className="text-white/30">·</span>
          <a href="#" className="hover:text-white transition">
            リスク・副作用について
          </a>
        </div>
      </div>
    </div>
  );
}

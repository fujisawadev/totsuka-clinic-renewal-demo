import Link from "next/link";

export default function Copyright() {
  return (
    <div className="bg-[#0d0d0d] text-white/50 text-xs py-4">
      <div className="container-clinic flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© ささき矯正歯科クリニック All Rights Reserved.</p>
        <div className="flex gap-4">
          <Link href="/precautionary/" className="hover:text-white transition">
            治療に関するご注意
          </Link>
          <span className="text-white/30">·</span>
          <Link href="/risk/" className="hover:text-white transition">
            リスク・副作用について
          </Link>
        </div>
      </div>
    </div>
  );
}

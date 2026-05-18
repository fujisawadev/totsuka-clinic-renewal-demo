export default function Copyright() {
  return (
    <div className="bg-[#0d0d0d] text-white/50 text-xs py-4">
      <div className="container-clinic flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© 2025 矯正歯科クリニック デモサイト</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">
            プライバシーポリシー
          </a>
          <span className="text-white/30">·</span>
          <a href="#" className="hover:text-white transition">
            サイトマップ
          </a>
        </div>
      </div>
    </div>
  );
}

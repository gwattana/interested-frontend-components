import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-white font-semibold tracking-tight">
          Component Lab
        </Link>
        <span className="text-zinc-500 text-sm">Frontend Showcase</span>
      </div>
    </nav>
  );
}

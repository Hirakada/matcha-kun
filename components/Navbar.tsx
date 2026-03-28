import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-neutral-white/80 backdrop-blur border-b border-neutral-200 z-50">
      <div className="max-w-container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <Image src="/vercel.svg" alt="Matcha Kun" width={100} height={48} className="logo h-10 w-auto"/>

        <div className="flex gap-6 text-body-sm font-sans">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
        </div>
      </div>
    </nav>
  );
}
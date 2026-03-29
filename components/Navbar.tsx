import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import LinkText from "./LinkText";


export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-300 mx-auto x-4 md:px-12 py-4 flex items-center justify-between">
        <Link href="./">
          <Image src="/logo.svg" alt="Matcha Kun" width={100} height={100} className="h-4 md:h-6 w-auto" priority/>
        </Link>

        <div className="flex items-center gap-6 text-body-sm font-baloo">
          <LinkText href="/menu">Know Your Matcha!</LinkText>
          <Button variant="cta" href="https://ig.me/m/matchakun.id">Contact Us</Button>
        </div>
      </div>
    </nav>
  );
}
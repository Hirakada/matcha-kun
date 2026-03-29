"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import LinkText from "./LinkText";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [visible, setVisible] = useState(!isHome);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > window.innerHeight * 0.8) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }
      `}
    >
      <div className="max-w-300 mx-auto px-4 md:px-12 py-4 flex items-center justify-between bg-white/80 backdrop-blur shadow-sm">
        
        <Link href="/" className="flex items-center">
          <Image
            src="/wordmark.svg"
            alt="Matcha Kun"
            width={240}
            height={48}
            className="h-10 md:h-12 w-auto"
            priority
          />
        </Link>

        <div className="flex items-center gap-6 text-body-sm font-heading">
          <LinkText href="/menu">Know Your Matcha!</LinkText>

          <Button
            variant="cta"
            href="https://ig.me/m/matchakun.id"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
}
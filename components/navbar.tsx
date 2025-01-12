import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            KoinX
          </Link>
        </div>
        <div className="hidden items-center space-x-8 md:flex">
          <Link href="/crypto-taxes" className="text-base font-semibold">
            Crypto Taxes
          </Link>
          <Link href="/free-tools" className="text-base font-semibold">
            Free Tools
          </Link>
          <Link href="/resource-center" className="text-base font-semibold">
            Resource Center
          </Link>
          <Button>Get Started</Button>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}

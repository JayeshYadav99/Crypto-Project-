'use client'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex flex-col space-y-4">
          <Link
            href="/crypto-taxes"
            className="text-lg font-semibold hover:text-primary"
          >
            Crypto Taxes
          </Link>
          <Link
            href="/free-tools"
            className="text-lg font-semibold hover:text-primary"
          >
            Free Tools
          </Link>
          <Link
            href="/resource-center"
            className="text-lg font-semibold hover:text-primary"
          >
            Resource Center
          </Link>
          <Button className="mt-4">Get Started</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}


"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
                {/* Логотип */}
                <Link href="/" className="font-heading text-lg font-semibold">
                    {siteConfig.name}
                </Link>

                {/* Десктопная навигация — скрыта на мобильных */}
                <nav className="hidden items-center gap-6 md:flex">
                    {siteConfig.navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>

                {/* Мобильная версия — гамбургер, скрыт на десктопе */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <Sheet>
                        <SheetTrigger
                            render={<Button variant="outline" size="icon" aria-label="Open menu" />}
                        >
                            <Menu className="h-5 w-5" />
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                            <nav className="flex flex-col gap-4 p-6">
                                {siteConfig.navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-base font-medium"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
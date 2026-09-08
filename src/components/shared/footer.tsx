import Link from "next/link";
import { Mail } from "lucide-react";
import { siGithub, siTelegram } from "simple-icons";
import { siteConfig } from "@/constants/site";
import { BrandIcon } from "@/components/shared/brand-icon";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border/40">
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
                <p className="text-sm text-muted-foreground">
                    © {year} {siteConfig.name}. All rights reserved.
                </p>

                <div className="flex items-center gap-4">
                    <Link
                        href={siteConfig.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub profile"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <BrandIcon icon={siGithub} className="h-5 w-5" />
                    </Link>
                    <Link
                        href={siteConfig.socials.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Telegram"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <BrandIcon icon={siTelegram} className="h-5 w-5" />
                    </Link>
                    <Link
                        href={`mailto:${siteConfig.socials.email}`}
                        aria-label="Send email"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <Mail className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const headingFont = localFont({
    src: "../public/fonts/font.woff2",
})

export const Logo = () => {
    return (
        <Link href="/">
            <div className="hover:opacity-75 transition md:flex items-center gap-x-2 hidden">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    height={30}
                    width={30}
                />
                <p className={cn("text-lg text-neutral-700", headingFont.className)}>
                    Taskify
                </p>
            </div>
        </Link>
    )
}
import { navItems } from "@/constants/navItems";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-[109px] pb-[50px]">
      <div className="max-w-[1060px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and description */}
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="BWEAL Logo"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
            <p className="text-sm max-w-xs">
              There are many variations of passage of Lor Ipsum available but
              the major have suffered alteration
            </p>
          </div>

          <div className="grid grid-cols-2">
            {/* Pages links */}
            <div>
              <h3 className="sm:text-2xl text-[18px] font-medium mb-6">
                Pages
              </h3>
              <nav className="flex flex-col space-y-3">
                {navItems.map(
                  (item) =>
                    item && (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="sm:text-[16px] text-sm font-normal transition-colors hover:text-white/80"
                      >
                        {item.label}
                      </Link>
                    )
                )}
              </nav>
            </div>

            {/* Social media links */}
            <div>
              <h3 className="sm:text-2xl text-[18px] font-medium mb-6">
                Social Media Link
              </h3>
              <nav className="flex flex-col space-y-3">
                <Link
                  href="#"
                  className="flex items-center gap-2 hover:underline sm:text-[18px] text-sm"
                >
                  <Image
                    src="/facebook.svg"
                    width={16}
                    height={16}
                    className="w-[16px] h-[16px] object-contain"
                    alt="Facebook"
                  />
                  <span>Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 hover:underline sm:text-[18px] text-sm"
                >
                  <Image
                    src="/skype.svg"
                    width={16}
                    height={16}
                    className="w-[16px] h-[16px] object-contain"
                    alt="Facebook"
                  />
                  <span>Skype</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 hover:underline sm:text-[18px] text-sm"
                >
                  <Image
                    src="/twitter.svg"
                    width={16}
                    height={16}
                    className="w-[16px] h-[16px] object-contain"
                    alt="Facebook"
                  />
                  <span>Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 hover:underline sm:text-[18px] text-sm"
                >
                  <Image
                    src="/web.svg"
                    width={16}
                    height={16}
                    className="w-[16px] h-[16px] object-contain"
                    alt="Facebook"
                  />
                  <span>Website</span>
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Bottom links */}
        <div className="text-center text-sm text-gray-400">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <span className="mx-2">|</span>
          <Link href="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}

"use client";

import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { logout } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CgLogOut } from "react-icons/cg";
// import { decodeToken } from "@/utils/decodeToken";

export default function Navbar() {
  // const [role, setRole] = useState<string | unknown>("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);

  // const getRolePath = (role: string | unknown) => {
  //   switch (role) {
  //     case "admin":
  //       return "admin";
  //     case "teacher":
  //       return "mentors";
  //     case "parents":
  //       return "parents";
  //     case "students":
  //     default:
  //       return "mentees";
  //   }
  // };

  // useEffect(() => {
  //   if (token) {
  //     const decodedToken = decodeToken(token);
  //     setRole(decodedToken?.role);
  //   }
  // }, [token]);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/courses" },
    { label: "STORE", href: "/contact-us" },
    { label: "DONATE", href: "/store" },
    { label: "BLOG", href: "/store" },
    { label: "EVENTS", href: "/store" },
    { label: "LIBRARY", href: "/store" },
    { label: "CONTACT", href: "/store" },
  ];

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-secondary text-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Empowering Communities Building Wealth"
            width={66}
            height={66}
            className="object-contain w-[66] h-[66]"
          />
        </Link>

        <nav className="hidden md:flex md:items-center md:justify-center md:gap-6">
          {navItems.map(
            (item) =>
              item && (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-white/80"
                >
                  {item.label}
                </Link>
              )
          )}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          {token ? (
            <Button
              onClick={handleLogout}
              className="rounded-full py-2 px-4 bg-white text-danger hover:bg-white hover:text-danger cursor-pointer hover:scale-90 flex justify-center items-center gap-1"
            >
              <CgLogOut /> Logout
            </Button>
          ) : (
            <Link
              href={"/register"}
              className="rounded-full py-2 px-4 bg-white text-primary font-bold hover:bg-white/90"
            >
              Sign Up
            </Link>
          )}
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] bg-primary text-white"
            >
              <div className="flex flex-col gap-8 pt-6">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center gap-2">
                    <Image
                      src={logo.src}
                      alt="Logo"
                      width={60}
                      height={60}
                      className="rounded-full bg-white p-1"
                    />
                  </Link>
                </div>
                <nav className="flex flex-col gap-4">
                  {navItems.map(
                    (item) =>
                      item && (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="text-lg font-medium transition-colors hover:text-white/80"
                        >
                          {item.label}
                        </Link>
                      )
                  )}
                </nav>
                {token ? (
                  <Button
                    onClick={handleLogout}
                    className="w-full text-center py-2 rounded-full bg-danger text-white hover:bg-white hover:text-danger flex justify-center items-center gap-1 hover:scale-90"
                  >
                    <CgLogOut /> Logout
                  </Button>
                ) : (
                  <Link
                    href={"/register"}
                    className="w-full text-center py-2 rounded-full bg-white text-primary hover:bg-white/90"
                  >
                    Sign Up
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

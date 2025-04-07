"use client";

import { Button } from "@/components/ui/button";
import { navItems } from "@/constants/navItems";
import { logout } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CgLogOut } from "react-icons/cg";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
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

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full lg:py-[26px] py-2 bg-primary text-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Empowering Communities Building Wealth"
            width={66}
            height={66}
            className="object-contain lg:w-[66] w-[50px] lg:h-[66] h-[50px]"
          />
        </Link>

        <nav className="hidden lg:flex md:items-center md:justify-center md:gap-8">
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

        {/* auth  */}
        <div className="hidden items-center gap-4 lg:flex">
          {token ? (
            <Button
              onClick={handleLogout}
              className="rounded-full py-2 px-4 bg-white text-danger hover:bg-white hover:text-danger cursor-pointer hover:scale-90 flex justify-center items-center gap-1"
            >
              <CgLogOut /> Logout
            </Button>
          ) : (
            <>
              <Link
                href={"/register"}
                className="py-[7px] px-[30px] font-normal border border-white text-base text-white hover:bg-white/90 hover:text-primary rounded-[8px] transition-all duration-300 ease-in-out"
              >
                Sign Up
              </Link>
              <Link
                href={"/login"}
                className="py-2 px-8 bg-white text-primary hover:bg-white/90 rounded-[8px] transition-all duration-300 ease-in-out"
              >
                Login
              </Link>
            </>
          )}
        </div>
        {/* auth  */}

        {/* mobile menu  */}
        <div className="flex items-center gap-4 lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                <Menu className="menu-icon" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] bg-primary text-white"
            >
              <div className="flex flex-col gap-8 pt-20">
                <nav className="flex flex-col gap-4">
                  {navItems.map(
                    (item) =>
                      item && (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="text-sm font-normal transition-colors hover:text-white/80"
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
                  <div className="flex flex-col gap-3">
                    <Link
                      href={"/register"}
                      className="py-[7px] px-[30px] font-normal border border-white text-base text-white hover:bg-white/90 hover:text-primary rounded-[8px] transition-all duration-300 ease-in-out text-center"
                    >
                      Sign Up
                    </Link>
                    <Link
                      href={"/login"}
                      className="py-2 px-8 bg-white text-primary hover:bg-white/90 rounded-[8px] transition-all duration-300 ease-in-out text-center"
                    >
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        {/* mobile menu  */}
      </div>
    </header>
  );
}

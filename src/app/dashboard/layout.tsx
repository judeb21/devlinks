"use client";
import { Instrument_Sans } from "next/font/google";
import "@/app/globals.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import NavLink from "next/link";
import { Eye, Link, UserCircle } from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import { LINK_ROUTE, PREVIEW_ROUTE, PROFILE_ROUTE } from "@/constants/routes";
import { Toaster } from "@/components/ui/toaster";
import { AuthContextProvider } from "@/context/AuthContext";

const inter = Instrument_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div className={inter.className}>
      <AuthContextProvider>
        <div className="min-h-screen ml-auto mr-auto">
          <div className="flex flex-col items-center justify-center">
            {/* Navigation */}
            <div className="md:max-w-[1440px] w-full flex items-center justify-center">
              <div className="w-full md:m-[24px] bg-white px-[24px] py-[16px] md:rounded-[8px] flex justify-between items-center">
                <NavLink href="/dashboard/link" className="hidden md:block">
                  <Image
                    src="/logo.svg"
                    alt="devlink Logo"
                    className="cursor-pointer md:m-auto"
                    width={146}
                    height={32}
                    priority
                  />
                </NavLink>

                <NavLink href="/dashboard/link" className="md:hidden block">
                  <Image
                    src="/favicon.ico"
                    alt="devlink Logo"
                    className="cursor-pointer md:m-auto"
                    width={27}
                    height={27}
                    priority
                  />
                </NavLink>

                <div className="flex gap-[16px]">
                  <Button asChild className="md:flex hidden">
                    <NavLink
                      href={LINK_ROUTE}
                      className={`flex gap-[8px] transition ease-in-out hover:text-primary-purple duration-300 ${
                        pathname === "/dashboard/link"
                          ? "nav bg-primary-light bg-primary-light text-primary-purple text-primary-purple"
                          : "text-grey-default"
                      }`}
                    >
                      <Link size={20} weight="thin" color="rgb(var(--grey))" />
                      Links
                    </NavLink>
                  </Button>

                  <Button asChild className="md:hidden block">
                    <NavLink
                      href={LINK_ROUTE}
                      className={`flex gap-[8px] transition ease-in-out hover:text-primary-purple duration-300 ${
                        pathname === "/dashboard/link"
                          ? "nav bg-primary-light bg-primary-light text-primary-purple text-primary-purple"
                          : "text-grey-default"
                      }`}
                    >
                      <Link size={20} weight="thin" color="rgb(var(--grey))" />
                    </NavLink>
                  </Button>

                  <Button asChild className="md:flex hidden">
                    <NavLink
                      href={PROFILE_ROUTE}
                      className={`flex gap-[8px] transition ease-in-out hover:text-primary-purple duration-300 ${
                        pathname === "/dashboard/profile"
                          ? "nav bg-primary-light bg-primary-light text-primary-purple text-primary-purple"
                          : "text-grey-default"
                      }`}
                    >
                      <UserCircle
                        size={20}
                        weight="thin"
                        color="rgb(var(--grey))"
                        className="hover:text-primary-purple"
                      />
                      Profile Details
                    </NavLink>
                  </Button>

                  <Button asChild className="md:hidden block">
                    <NavLink
                      href={PROFILE_ROUTE}
                      className={`flex gap-[8px] transition ease-in-out hover:text-primary-purple duration-300 ${
                        pathname === "/dashboard/profile"
                          ? "nav bg-primary-light bg-primary-light text-primary-purple text-primary-purple"
                          : "text-grey-default"
                      }`}
                    >
                      <UserCircle
                        size={20}
                        weight="thin"
                        color="rgb(var(--grey))"
                        className="hover:text-primary-purple"
                      />
                    </NavLink>
                  </Button>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="border-primary-purple text-primary-purple transition ease-in-out hover:bg-primary-light duration-300 md:block hidden"
                >
                  <NavLink
                    href={PREVIEW_ROUTE}
                    className={`flex gap-[8px] transition ease-in-out hover:text-primary-purple duration-300`}
                  >
                    Preview
                  </NavLink>
                </Button>

                <Button
                  variant="outline"
                  className="border-primary-purple text-primary-purple md:hidden block"
                >
                  <Eye size={20} weight="bold" />
                </Button>
              </div>
            </div>

            {/* Body */}
            <div className="md:max-w-[1440px] w-full flex items-center justify-center">
              <div className="w-full ml-[24px] md:mr-[24px] flex items-center justify-start gap-[24px] mb-[24px]">
                {children}
                <Toaster />
              </div>
            </div>
          </div>
        </div>
      </AuthContextProvider>
    </div>
  );
}

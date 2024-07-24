"use client";
import { Instrument_Sans } from "next/font/google";
import "@/app/globals.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import NavLink from "next/link";
import { Link, UserCircle } from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import { LINK_ROUTE, PROFILE_ROUTE } from "@/constants/routes";
import { Toaster } from "@/components/ui/toaster"
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
              <div className="w-full md:m-[24px] bg-white px-[24px] py-[16px] md:rounded-[8px] flex justify-between">
                <NavLink href="/dashboard/link">
                  <Image
                    src="/logo.svg"
                    alt="devlink Logo"
                    className="cursor-pointer md:m-auto"
                    width={146}
                    height={32}
                    priority
                  />
                </NavLink>

                <div className="flex gap-[16px]">
                  <Button asChild>
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

                  <Button asChild>
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
                </div>

                <Button
                  variant="outline"
                  className="border-primary-purple text-primary-purple transition ease-in-out hover:bg-primary-light duration-300"
                >
                  Preview
                </Button>
              </div>
            </div>

            {/* Body */}
            <div className="md:max-w-[1440px] w-full flex items-center justify-center">
              <div className="w-full ml-[24px] mr-[24px] flex items-center justify-start gap-[24px] mb-[24px]">
                <div className="w-[0px] md:w-full md:max-w-[580px] md:p-[100px] md:rounded-[12px] bg-white flex items-center justify-center relative">
                  <svg
                    width="308"
                    height="632"
                    viewBox="0 0 308 632"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative overflow-scroll"
                  >
                    <path
                      d="M1 54.5C1 24.9528 24.9528 1 54.5 1H253.5C283.047 1 307 24.9528 307 54.5V577.5C307 607.047 283.047 631 253.5 631H54.5C24.9528 631 1 607.047 1 577.5V54.5Z"
                      stroke="#737373"
                    />
                    <path
                      d="M12 55.5C12 30.9233 31.9233 11 56.5 11H80.5C86.8513 11 92 16.1487 92 22.5C92 30.5081 98.4919 37 106.5 37H201.5C209.508 37 216 30.5081 216 22.5C216 16.1487 221.149 11 227.5 11H251.5C276.077 11 296 30.9233 296 55.5V576.5C296 601.077 276.077 621 251.5 621H56.5C31.9233 621 12 601.077 12 576.5V55.5Z"
                      fill="white"
                      stroke="#737373"
                    />
                  </svg>
                  <div className="absolute md:w-[250px] max-h-[580px] h-[100%]">
                    <h4>Image</h4>
                    <div className="relative h-[100%] overflow-scroll"></div>
                  </div>
                </div>
                <div className="w-full md:w-full rounded-[12px] bg-white">
                  {children}
                </div>
                <Toaster />
              </div>
            </div>
          </div>
        </div>
      </AuthContextProvider>
    </div>
  );
}

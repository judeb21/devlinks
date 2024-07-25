"use client";
import { Instrument_Sans } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AuthContextProvider } from "@/context/AuthContext";
import { PreviewHeader } from "@/components/layout/preview/header";

const inter = Instrument_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className={inter.className}>
      <AuthContextProvider>
        <div className="min-h-screen ml-auto mr-auto">
          <div className="flex flex-col items-center justify-center">
            {/* Navigation */}
            <PreviewHeader />

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

import Image from "next/image";
import Login from "./(auth)/(auth-layout)/login/page";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start mb-[60px]">
      <div className="md:mb-[51px] md:pt-[200px] p-[32px] w-[100%] md:w-[476px]">
        <Image
          src="/logo.svg"
          alt="devlink Logo"
          className="cursor-pointer md:m-auto"
          width={182}
          height={40}
          priority
        />
      </div>
      <Login />

      <Toaster />
    </main>
  );
}

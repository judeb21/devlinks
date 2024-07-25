'use client';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import RightCaret from "../../../public/right-caret.svg";
import * as Logo from "@/helpers/platformIcons";
import Link from "next/link";
import ProfilePic from "../../../public/profile.svg";

export default function Preview() {
  
  return (
    <>
      <div className="w-full border-0 md:max-w-[350px] md:m-auto md:shadow-[0_0_32px_0_rgba(0,0,0,0.1)] rounded-[24px] translate-y-[30px] md:translate-y-[-100px] z-10 md:bg-white">
        <Card className="w-full border-0 rounded-[24px] p-[24px] md:px-[46px] md:py-[48px] md:bg-white shadow-none">
          <CardHeader className="p-0">
            <CardTitle className="flex items-center mb-[25px]">
              <Image
                src={ProfilePic}
                height={104}
                width={104}
                alt="card profile picture"
                style={{
                  border: "4px solid var(--purple)",
                }}
                className="m-auto"
              />
            </CardTitle>
            <div className="text-center">
              <h4 className="text-[32px] text-grey-dark leading-[48px] font-bold capitalize">
                Ben Wright
              </h4>
              <p className="mt-[8px] text-grey-default leading-[24px] lowercase">
                ben@exmaple.com
              </p>
            </div>
          </CardHeader>
          <CardContent className="max-h-[300px] overflow-scroll p-0 mt-[50px] border-0">
            <Link
              className="github flex justify-between items-center bg-[#000] p-[16px] rounded-[8px] mb-[20px] cursor-pointer"
              href="#"
              target="_blank"
            >
              <div className="flex gap-[8px]">
                <Image
                  src={Logo.GithubLogo}
                  height={20}
                  width={20}
                  alt="Platform icon"
                />
                <h4 className="text-white text-[15px]">GitHub</h4>
              </div>
              <div>
                <Image
                  src={RightCaret}
                  height={16}
                  width={16}
                  alt="right caret icon to view link"
                />
              </div>
            </Link>

            <Link
              className="github flex justify-between items-center bg-error-default p-[16px] rounded-[8px] mb-[20px] cursor-pointer"
              href="#"
              target="_blank"
            >
              <div className="flex gap-[8px]">
                <Image
                  src={Logo.YoutubeLogo}
                  height={20}
                  width={20}
                  alt="Platform icon"
                />
                <h4 className="text-white text-[15px]">Youtube</h4>
              </div>
              <div>
                <Image
                  src={RightCaret}
                  height={16}
                  width={16}
                  alt="right caret icon to view link"
                />
              </div>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

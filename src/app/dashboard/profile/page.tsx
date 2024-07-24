"use client";
import { Button } from "@/components/ui/button";
import { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useAuthContext } from "@/context/AuthContext";

const convertToBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader?.readAsDataURL(file);
    reader.onload = () => resolve(reader?.result);
    reader.onerror = (error) => reject(error);
  });

export default function Dashboard() {
  const upload = useRef<HTMLInputElement>(null);
  const [profilPic, setProfilePic] = useState("");
  const { user } = useAuthContext();

  const onFileChange = async () => {
    const file = upload.current?.files as FileList;
    if (!upload.current?.files) return;

    const fileBase64 = await convertToBase64(file[0]);

    setProfilePic(fileBase64 as string);
  };

  const handleFileInput = () => {
    upload?.current?.click();
  };

  return (
    <>
      <div>
        <div className="p-[40px]">
          <h2 className="font-bold text-grey-dark text-[32px] leading-[48px] mb-[9px]">
            Profile Details
          </h2>
          <p className="leading-[24px] text-grey-default">
            Add your details to create a personal touch to your profile
          </p>
        </div>

        <div className="md:max-h-[570px] h-[100%] flex flex-col px-[40px] bg-white justify-center">
          <div className="bg-grey-light p-[20px] rounded-[12px] mb-[24px] flex justify-start gap-[24px] items-center">
            <p className="text-grey-dark md:w-[200px] leading-[24px]">
              Profile picture
            </p>
            <div>
              <div
                className={`w-[193px] h-[193px] rounded-[12px] flex flex-col justify-center items-center ${
                  !profilPic && "bg-primary-light"
                }`}
              >
                {profilPic ? (
                  <Image
                    src={`${profilPic}`}
                    alt="upload image"
                    className="cursor-pointer rounded-[12px] w-full h-[193px] object-cover"
                    width={115}
                    height={72}
                    onClick={handleFileInput}
                  />
                ) : (
                  <Image
                    src="/upload.svg"
                    alt="upload image"
                    className="cursor-pointer"
                    width={115}
                    height={72}
                    onClick={handleFileInput}
                  />
                )}
              </div>
              <input
                className="hidden"
                name="profilePic"
                type="file"
                accept="image.png, image.jpg"
                ref={upload}
                onChange={onFileChange}
              />
            </div>
            <p className="text-[12px] leading-[18px] text-grey-default">
              <span className="block">Image must be below 1024x1024px.</span>
              <span className="block">Use PNG or JGP format.</span>
            </p>
          </div>

          <div className="bg-grey-light p-[20px] rounded-[12px] mb-[50px] flex flex-col justify-start gap-[24px] items-center">
            <div className="flex md:flex-row flex-col w-full max-w-full items-center gap-[16px] mt-[12px]">
              <Label
                htmlFor="firstName"
                className="text-grey-dark text-[16px] font-normal md:w-[240px] w-full"
              >
                First name*
              </Label>
              <Input
                type="text"
                id="firstName"
                placeholder="At least 8 characters"
                autoComplete="off"
                autoCapitalize="off"
                className="border-[1px] focus:border-[#633CFF] focus:ring-1 focus:ring-transparent px-[16px] py-[12px] text-grey-dark border-grey-border focus:shadow-[0_0_32px_0_rgba(99,60,255,0.25)]"
              />
            </div>

            <div className="flex md:flex-row flex-col w-full max-w-full items-center gap-[16px] mt-[12px]">
              <Label
                htmlFor="lastName"
                className="text-grey-dark text-[16px] font-normal md:w-[240px] w-full"
              >
                Last name*
              </Label>
              <Input
                type="text"
                id="lastName"
                placeholder="At least 8 characters"
                autoComplete="off"
                autoCapitalize="off"
                className="border-[1px] focus:border-[#633CFF] focus:ring-1 focus:ring-transparent px-[16px] py-[12px] text-grey-dark border-grey-border focus:shadow-[0_0_32px_0_rgba(99,60,255,0.25)]"
              />
            </div>

            <div className="flex md:flex-row flex-col w-full max-w-full items-center gap-[16px] mt-[12px]">
              <Label
                htmlFor="email"
                className="text-grey-dark text-[16px] font-normal md:w-[240px] w-full"
              >
                Email*
              </Label>
              <Input
                type="email"
                id="lastName"
                placeholder="ben@example.com"
                autoComplete="off"
                autoCapitalize="off"
                value={user?.email as string}
                readOnly={true}
                className="border-[1px] focus:border-[#633CFF] focus:ring-1 focus:ring-transparent px-[16px] py-[12px] text-grey-dark border-grey-border focus:shadow-[0_0_32px_0_rgba(99,60,255,0.25)]"
              />
            </div>
          </div>
        </div>

        <div className="border-t-[1px] border-grey-border px-[40px] my-[24px] pb-0"></div>

        <div className="px-[40px] pb-[24px] flex justify-end">
          <Button className="w-[90px] bg-primary-purple transition ease-in-out hover:bg-primary-hover disabled:bg-primary-light text-white duration-300">
            Save
          </Button>
        </div>
      </div>
    </>
  );
}

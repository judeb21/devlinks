"use client";
import { Button } from "@/components/ui/button";
import { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useAuthContext } from "@/context/AuthContext";
import { Skeleton } from "@/components/ui/skeleton";
import {
  profileFormSchema,
  ProfileValidation,
} from "@/validationSchema/profileSchema";
import { updateProfile, User, UserCredential } from "firebase/auth";
import { useToast } from "@/components/ui/use-toast";
import { auth } from "@/services/firebase";
import { z } from "zod";
import { cn } from "@/lib/utils";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

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
  const [loading, setLoader] = useState(false);
  const { toast } = useToast();
  const form = ProfileValidation();
  const [fName, setFName] = useState("");
  const [lname, setLName] = useState("");

  const onSubmit = (values: z.infer<typeof profileFormSchema>) => {
    setLoader(true);
    const payload = {
      displayName: `${values.firstName} ${values.lastName}`,
      photoURL: profilPic,
      email: user?.email as string,
    };
    updateProfile(auth.currentUser as User, {
      ...payload,
    })
      .then(() => {
        toast({
          className: cn(
            "bottom-0 left-0 md:left-[36%] flex fixed md:max-w-[420px] md:bottom-4 bg-grey-dark text-white"
          ),
          description: "User upated successfully",
        });
        setLoader(false);
      })
      .catch((e) => {
        setLoader(false);
        toast({
          variant: "destructive",
          className: cn(
            "bottom-0 left-0 md:left-[36%] flex fixed md:max-w-[406px] md:bottom-4 bg-error-default rounded-[12px] text-white"
          ),
          description: `${e?.message}`,
        });
      });
  };

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
      <div className="w-[0px] hidden md:w-full md:block md:max-w-[580px] md:p-[100px] md:rounded-[12px] bg-white flex items-center justify-center relative">
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
        <div className="absolute w-[0] md:w-[250px] max-h-[580px] h-[100%] top-[140px] md:auto left-[22%]">
          <div className="relative hidden md:flex h-[100%] overflow-scroll flex flex-col justify-start items-center">
            <div className="mt-[40px]">
              {user?.photoURL || profilPic ? (
                <Image
                  src={`${user?.photoURL ? user?.photoURL : profilPic}`}
                  alt="upload image"
                  className="cursor-pointer w-[96px] rounded-[100%] h-[96px] object-cover border-[4px] border-primary-purple"
                  width={96}
                  height={96}
                  onClick={handleFileInput}
                />
              ) : (
                <Skeleton className="h-[96px] w-[96px] rounded-full bg-[#EEEEEE]" />
              )}
            </div>

            <div className="mt-[25px] mb-[13px]">
              {user?.displayName || fName ? (
                <h4 className="text-grey-dark text-[18px]">
                  {user?.displayName ? user.displayName : `${fName} ${lname}`}
                </h4>
              ) : (
                <Skeleton className="h-[16px] w-[160px] rounded-full bg-[#EEEEEE]" />
              )}
            </div>

            <div className="mb-[56px]">
              {user?.email ? (
                <p className="text-grey-default text-[14px]">{user?.email}</p>
              ) : (
                <Skeleton className="h-[8px] w-[72px] rounded-full bg-[#EEEEEE]" />
              )}
            </div>

            <div className="mb-[20px]">
              <Skeleton className="h-[44px] w-[237px] rounded-[8px] bg-[#EEEEEE]" />
            </div>

            <div className="mb-[20px]">
              <Skeleton className="h-[44px] w-[237px] rounded-[8px] bg-[#EEEEEE]" />
            </div>

            <div className="mb-[20px]">
              <Skeleton className="h-[44px] w-[237px] rounded-[8px] bg-[#EEEEEE]" />
            </div>

            <div className="mb-[20px]">
              <Skeleton className="h-[44px] w-[237px] rounded-[8px] bg-[#EEEEEE]" />
            </div>

            <div className="mb-[20px]">
              <Skeleton className="h-[44px] w-[237px] rounded-[8px] bg-[#EEEEEE]" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-full rounded-[12px] bg-white">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="pt-[40px] md:p-[40px] p-[24px]">
              <h2 className="font-bold text-grey-dark text-[32px] leading-[48px] mb-[9px]">
                Profile Details
              </h2>
              <p className="leading-[24px] text-grey-default">
                Add your details to create a personal touch to your profile
              </p>
            </div>

            <div className="md:max-h-[560px] h-[100%] flex flex-col md:px-[40px] px-[24px] bg-white justify-center">
              <div className="bg-grey-light p-[20px] rounded-[12px] mb-[24px] flex flex-col md:flex-row justify-start gap-[24px] items-center">
                <p className="text-grey-dark md:w-[200px] leading-[24px]">
                  Profile picture
                </p>
                <div>
                  <div
                    className={`w-[193px] h-[193px] rounded-[12px] flex flex-col justify-center items-center ${
                      !profilPic && "bg-primary-light"
                    }`}
                  >
                    {profilPic || user?.photoURL ? (
                      <Image
                        src={`${user?.photoURL ? user?.photoURL : profilPic}`}
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
                    accept="image/png, image/jpg, image/jpeg"
                    ref={upload}
                    onChange={onFileChange}
                  />
                </div>
                <p className="text-[12px] leading-[18px] text-grey-default">
                  <span className="block">
                    Image must be below 1024x1024px.
                  </span>
                  <span className="block">Use PNG or JGP format.</span>
                </p>
              </div>

              <div className="bg-grey-light p-[20px] rounded-[12px] mb-[50px] flex flex-col justify-start gap-[12px] md:gap-[24px] items-center">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="relative flex md:flex-row flex-col w-full max-w-full items-center gap-[4px] md:gap-[16px] mt-[12px]">
                      <FormLabel className="text-grey-dark text-[12px] md:text-[16px] font-normal md:w-[240px] w-full">
                        First name*
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          id="firstName"
                          placeholder="e.g John"
                          autoComplete="off"
                          autoCapitalize="off"
                          {...field}
                          defaultValue={(user?.displayName as string)?.split(" ")[0]}
                          className="border-[1px] h-[48px] focus:border-[#633CFF] focus:ring-1 focus:ring-transparent px-[16px] py-[12px] text-grey-dark border-grey-border focus:shadow-[0_0_32px_0_rgba(99,60,255,0.25)]"
                        />
                      </FormControl>
                      <FormMessage className="absolute font-normal text-error-default text-[12px] right-[16px] top-[40%]" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="relative flex md:flex-row flex-col w-full max-w-full items-center gap-[4px] md:gap-[16px] mt-[12px]">
                      <FormLabel className="text-grey-dark text-[12px] md:text-[16px] font-normal md:w-[240px] w-full">
                        Last name*
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          id="lastName"
                          placeholder="e.g John"
                          autoComplete="off"
                          autoCapitalize="off"
                          {...field}
                          defaultValue={(user?.displayName as string)?.split(" ")[1]}
                          className="border-[1px] h-[48px] focus:border-[#633CFF] focus:ring-1 focus:ring-transparent px-[16px] py-[12px] text-grey-dark border-grey-border focus:shadow-[0_0_32px_0_rgba(99,60,255,0.25)]"
                        />
                      </FormControl>
                      <FormMessage className="absolute font-normal text-error-default text-[12px] right-[16px] top-[40%]" />
                    </FormItem>
                  )}
                />

                <div className="flex md:flex-row flex-col w-full max-w-full items-center gap-[4px] md:gap-[16px] mt-[12px]">
                  <Label
                    htmlFor="email"
                    className="text-grey-dark text-[12px] md:text-[16px] font-normal md:w-[240px] w-full"
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
                    className="border-[1px] h-[48px] focus:border-[#633CFF] focus:ring-1 focus:ring-transparent px-[16px] py-[12px] text-grey-dark border-grey-border focus:shadow-[0_0_32px_0_rgba(99,60,255,0.25)]"
                  />
                </div>
              </div>
            </div>

            <div className="border-t-[1px] border-grey-border px-[40px] my-[24px] pb-0"></div>

            <div className="px-[40px] pb-[24px] flex justify-end">
              <Button
                className="w-[90px] bg-primary-purple transition ease-in-out hover:bg-primary-hover disabled:bg-primary-light text-white duration-300"
                disabled={loading}
              >
                Save
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}

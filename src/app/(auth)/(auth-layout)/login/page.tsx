"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EnvelopeSimple, LockKey } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { LINK_ROUTE, REGISTER_ROUTE } from "@/constants/routes";
import { auth } from "@/services/firebase";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { LoginValidation, loginFormSchema } from "@/validationSchema/authSchema";
import { useRouter } from 'next/navigation';
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { z } from "zod";
import { signInWithEmailAndPassword, User } from "firebase/auth";
import { createCookies } from "@/app/action";

type ExtendedUser = User & {
  accessToken?: string;
};

export default function Login() {
  const router = useRouter();
  const { toast } = useToast();
  const form = LoginValidation();
  const [user, setUser] = useState({});
  const [loading, setLoader] = useState(false);

  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => { 
    setLoader(true);
    signInWithEmailAndPassword(auth, values.email, values.password).then((response) => {
      toast({
        className: cn(
          'bottom-0 left-[36%] flex fixed md:max-w-[420px] md:bottom-4 bg-grey-dark'
        ),
        description: "User logged in successfully",
      })
      const userResponse: ExtendedUser = response?.user;
      setUser(userResponse);
      setLoader(false);
      createCookies(userResponse?.accessToken as string);
      router.push(LINK_ROUTE);
    }).catch(e => {
      setLoader(false);
      toast({
        variant: "destructive",
        className: cn(
          'bottom-0 left-[36%] flex fixed md:max-w-[406px] md:bottom-4 bg-error-default rounded-[12px]'
        ),
        description: `${e?.message}`,
      })
    });
  };

  return (
    <>
      <div className="w-[100%] md:w-[476px] md:bg-white p-[32px] md:p-[40px] md:rounded-[8px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <h4 className="text-[2rem] text-grey-dark leading-[150%]">Login</h4>
            <p className="text-grey-default pt-[8px] font-normal leading-[150%]">
              Add your details below to get back into the app
            </p>

            <div className="w-full mt-[36px]">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-grey-dark text-[12px] font-normal">
                      Email address
                    </FormLabel>
                    <FormControl>
                      <div className="div relative flex w-full max-w-full items-center h-[48px] gap-[12px] rounded-[8px] border-[1px] border-grey-border bg-white px-[16px] py-[12px]">
                        <EnvelopeSimple
                          size={16}
                          weight="fill"
                          color="rgb(var(--grey))"
                        />
                        <Input
                          type="email"
                          placeholder="Email"
                          autoComplete="off"
                          autoCapitalize="off"
                          {...field}
                          className="border-0 focus:outline-none focus:border-white focus:ring-1 focus:ring-transparent pl-0 ml-0 text-grey-dark"
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="absolute font-normal text-error-default text-[12px] right-[16px] top-[50%]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="relative mt-[24px]">
                    <FormLabel className="text-grey-dark text-[12px] font-normal">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="div relative flex w-full max-w-full items-center h-[48px] gap-[12px] rounded-[8px] border-[1px] border-grey-border bg-white px-[16px] py-[12px]">
                        <LockKey size={16} weight="fill" color="rgb(var(--grey))" />
                        <Input
                          type="password"
                          placeholder="Password"
                          autoComplete="off"
                          autoCapitalize="off"
                          {...field}
                          className="border-0 focus:outline-none focus:border-white focus:ring-1 focus:ring-transparent pl-0 ml-0 text-grey-dark"
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="absolute font-normal text-error-default text-[12px] right-[16px] top-[50%]" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary-purple transition ease-in-out hover:bg-primary-hover disabled:bg-primary-light text-white mt-[24px] mb-[24px] duration-300"
              >
                Login
              </Button>

              <p className="text-center">
                {"Don't have an account?"}{" "}
                <Link
                  href={REGISTER_ROUTE}
                  className="text-primary-purple cursor-pointer"
                >
                  Create account
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}

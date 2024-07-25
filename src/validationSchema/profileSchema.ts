"use client";
import { auth } from "@/services/firebase";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const profileFormSchema = z.object({
  firstName: z.string().min(1, {message: "Can't be empty"}),
  lastName: z.string().min(1, {message: "Can't be empty"}),
  photoURL: z.string(),
});

const user = auth.currentUser;

const ProfileValidation = () =>
  useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      firstName: (user?.displayName as string)?.split(" ")[0],
      lastName: (user?.displayName as string)?.split(" ")[1],
      photoURL: "",
    },
  });

export { ProfileValidation };

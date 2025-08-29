"use client";

import wrappedFetch from "hooks/useApi";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const successRedirectUrl = "/dashboard";

export const useLogin = () => {
  const router = useRouter();
  const [userCred, setUserCred] = useState({ email: "", password: "" });
  const { email, password } = userCred;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: string
  ) => {
    setUserCred({ ...userCred, [type]: e.target.value });
  };

  const onSubmit = async () => {
    try {
      const response = await wrappedFetch("/api/auth/login", "POST", {
        email,
        password,
      });

      if (response) {
        router.push(successRedirectUrl);
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };
  return {
    onChange,
    email,
    password,
    onSubmit,
  };
};

"use client"
import Image from "next/image";
import { Button } from "./ui/button";
import { Lock } from "lucide-react";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();

  const goToLogin = () => {
    router.push('/homepage');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-dark-mid">
      <Image
        src="https://rb.gy/rreijn"
        width="550"
        height="300"
        objectFit="contain"
        alt="docs"
      />

      <Button
        className="mt-10 capitalize bg-blue-500"
        onClick={goToLogin}
      >
         Sign in with Google
      </Button>
    </div>
  );
}

export default Login;

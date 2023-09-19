"use client";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-center h-screen p-4 gap-2">
      {session && (
        <div className="flex gap-2 items-center">
          <Image
            src={session!.user!.image!}
            alt="img"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="flex flex-col gap-2">
            <p className="font-bold">{session?.user?.name}</p>
            <p>{session?.user?.email}</p>
          </div>
        </div>
      )}
      {!session && (
        <button
          onClick={() => signIn()}
          className="p-2 my-2 bg-zinc-500 text-white rounded-md"
        >
          Sign In with Github
        </button>
      )}
      {session && (
        <button
          onClick={() => signOut()}
          className="p-2 bg-zinc-500 my-2 text-white rounded-md"
        >
          Sign out
        </button>
      )}
    </div>
  );
};

export default Login;

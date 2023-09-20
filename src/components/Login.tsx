"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signIn, signOut, useSession } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-center gap-2">
      {session && (
        <div className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage src={session!.user!.image!} alt="user avatar" />
            <AvatarFallback>{session!.user!.name![0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2">
            <p className="font-bold">{session?.user?.name}</p>
            <p>{session?.user?.email}</p>
          </div>
        </div>
      )}
      {!session && (
        <button
          onClick={() => signIn()}
          className="p-2 bg-slate-500 text-white rounded-md"
        >
          Sign In with Github
        </button>
      )}
      {session && (
        <button
          onClick={() => signOut()}
          className="p-2 bg-slate-500 text-white rounded-md"
        >
          Sign out
        </button>
      )}
    </div>
  );
};

export default Login;

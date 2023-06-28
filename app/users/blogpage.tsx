'use client';

import { signOut } from "next-auth/react";
import Posts from "../components/Posts";


const Users = () => {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Kofi</span>.
        </span>
      </p>
      
      <Posts />

      <button onClick={() => signOut()}>
        Logout
      </button>
    </main>
  )
}
export default Users

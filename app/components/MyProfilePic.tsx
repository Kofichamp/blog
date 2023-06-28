
import Image from "next/image";
import React from 'react'

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
    <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/Images/8F85E9C7-6072-446A-B7F4-231848CDFFB5_1_201_a.jpeg"
        width={200}
        height={200}
        alt="Dave Gray"
        priority={true}
    />
</section>
  )
}

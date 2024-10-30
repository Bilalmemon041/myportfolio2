"use client";
import React from "react"
import Link from "next/link";
export default function Navbar(){
    return(
      <main className="bg-gray-900 ">
        <nav className="flex justify-between mx-4  h-[60px] items-center text-white">
          {/* right section */}
          <section className="mr-7">
            <div className="font-bold text-2xl">DEVELOPER</div>
          </section>
          {/* LEFT SECTION */}
          <section className="flex gap-8 ">
            <Link href='/'>HOME</Link>
            <Link href="/Nav/About">ABOUT</Link>
            <Link href="/Nav/Services">SERVICES</Link>
            <Link href="/Nav/Contact">CONTACT</Link>
            <Link href="/">GUARDS</Link>
           
          </section>
        </nav>
      </main>
    )
}
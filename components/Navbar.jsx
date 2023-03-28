import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../public/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width="65"
            height="65"
            className="cursor-pointer"
            priority
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b text-xl">Why Us</li>
            </Link>
            <Link href="/services">
              <li className="ml-10 uppercase hover:border-b text-xl">
                Our Services
              </li>
            </Link>
            <Link href="/blog">
              <li className="ml-10 uppercase hover:border-b text-xl">Blog</li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 uppercase hover:border-b text-xl">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer text-xl">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }>
            <div className="flex w-full items-center justify-end">
                <AiOutlineClose size={25} />
            </div>
      </div>
    </nav>
  );
}

export default Navbar;

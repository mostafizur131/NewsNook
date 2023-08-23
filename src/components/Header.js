import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="p-4 bg-gray-800 text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <Link href="/" className="flex items-center p-2">
          NewsNook
        </Link>
        <ul className="items-stretch space-x-3 flex flex-wrap">
          <li className="flex">
            <Link
              href="/"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Home
            </Link>
          </li>
          <li className="flex">
            <Link
              href="/blog"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Blog
            </Link>
          </li>
          <li className="flex">
            <Link
              href="/about"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              About
            </Link>
          </li>
          <li className="flex">
            <Link
              href="/contact"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-gray-400">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0 py-5">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div>
            <Link href="/" className="text-3xl">
              NewsNook
            </Link>
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <Link href="#">Terms of Use</Link>
            </li>
            <li>
              <Link href="#">Privacy</Link>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <Link href="#">Instagram</Link>
          </li>
          <li>
            <Link href="#">Facebook</Link>
          </li>
          <li>
            <Link href="#">Twitter</Link>
          </li>
        </ul>
      </div>
      <div className="py-6 text-sm text-center text-gray-400 border-t-2 mt-5">
        © 2023 NewsNook. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

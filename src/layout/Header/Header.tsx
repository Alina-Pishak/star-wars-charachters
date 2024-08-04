import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="container">
      <Link href="/" className="flex justify-center py-2">
        <Image
          src="/images/star-wars-logo-2x.webp"
          alt="logo"
          width={100}
          height={100}
          className="w-[100px] md:w-56"
        />
      </Link>
    </header>
  );
};

export default Header;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header
      className="spaces py-2 pt-2 pb-2 container"
      style={{ paddingTop: "20px", paddingBottom: "20px" }}
    >
      <Link href="/" className="flex justify-center">
        <Image
          src="/images/star-wars-logo-2x.webp"
          alt="logo"
          width={100}
          height={100}
          className="w-[100px] md:w-44"
        />
      </Link>
    </header>
  );
};

export default Header;

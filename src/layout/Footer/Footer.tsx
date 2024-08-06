import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      className=" spaces container py-2 flex justify-center mt-auto"
      style={{ paddingTop: "20px", paddingBottom: "20px" }}
    >
      <p className="text-center">
        Star Wars and all associated names and/or images are copyright Lucasfilm
        Ltd. Images were freely collected from
        <Link
          href="https://starwars.fandom.com/wiki/Main_Page"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          &nbsp; Wookiepedia.
        </Link>
      </p>
    </footer>
  );
};

export default Footer;

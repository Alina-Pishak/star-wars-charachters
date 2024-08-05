import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="container py-2 flex justify-center">
      <p>
        Star Wars and all associated names and/or images are copyright Lucasfilm
        Ltd. Images were freely collected from
        <Link
          href="https://starwars.fandom.com/wiki/Main_Page"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Wookiepedia.
        </Link>
      </p>
    </footer>
  );
};

export default Footer;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../public/yimbs-logo.jpg";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [width, setWidth] = useState(0);

  const updateScrollY = () => {
    const pageYOffset = window.scrollY;
    setScrollY(pageYOffset);
  };

  function handleResize() {
    // Set window width/height to state
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("scroll", updateScrollY);
    window.addEventListener("resize", handleResize);

    return () => [
      window.removeEventListener("scroll", updateScrollY),
      window.removeEventListener("resize", handleResize),
    ];
  }, []);

  return (
    <header className="w-full flex justify-center sticky top-0 left-0 bg-black p-4 z-20">
      <nav className="w-4/5 max-w-[1440px] relative flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="logo"
            height={width < 400 ? 30 : 40}
            width={width < 400 ? 30 : 40}
            className="rounded-lg"
          />
          <h1 className="text-3xl sm:text-4xl font-bold">Yimbs</h1>
        </div>

        {/*  Search-Bar hid, unhid*/}

        {width > 1024 && (
          <div
            className={`flex items-center transition-all bg-slate-100 px-4 py-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[30px] w-[300px] ${
              scrollY > 900 ? "scale-100" : "scale-0"
            } `}>
            <input
              type="text"
              className="bg-transparent outline-none w-full text-black"
              placeholder="eg. AC service, PC service.."
            />
            <SearchIcon className="text-black ml-1" />
          </div>
        )}

        {/*  Search-Bar hid, unhid*/}

        <div className="hidden md:flex items-center">
          <Link
            className={`mr-4 transition-all underline text-xs ${
              scrollY > 900 ? "scale-0" : "scale-100"
            } `}
            href="/">
            Join as Proffessional
          </Link>
          <Link className="mr-4 text-lg" href="/">
            Service
          </Link>
          <Link className="text-lg" href="/">
            Login
          </Link>
        </div>

        {/* Hamburger Drawer */}
        <div className="drawer-end md:hidden">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer-4" className="drawer-button">
              <div className="h-[2px] w-6 bg-white mb-1"></div>
              <div className="h-[2px] w-6 bg-white mb-1"></div>
              <div className="h-[2px] w-6 bg-white mb-1"></div>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <Link className="mr-4 underline text-sm" href="/">
                  Join as A Proffesional
                </Link>
              </li>
              <li>
                <Link className="mr-4 text-sm md:text-lg" href="/">
                  Service
                </Link>
              </li>
              <li>
                <Link className="text-sm md:text-lg" href="/">
                  Login
                </Link>
              </li>
              <li>
                <div
                  className={`flex my-3 items-center bg-slate-100 px-4 py-2 rounded-[30px] w-[300px] hover:bg-white  `}>
                  <input
                    type="text"
                    className="bg-transparent outline-none w-full text-black"
                    placeholder="eg. AC service, PC service.."
                  />
                  <SearchIcon className="text-black ml-1" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Hamburger Drawer */}
      </nav>
    </header>
  );
}

export default Navbar;

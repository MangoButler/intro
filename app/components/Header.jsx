"use client";

import Link from "next/link";
import { useRef, useState } from "react";

function Header() {
  const [search, setSearch] = useState("");

  const searchInputHandler = (event) => {
    setSearch(event.target.value);
  };
  const buttonClickHandler = () => {
    console.log(search);
  };
  return (
    <header>
      <h1>PageHeader</h1>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/blog"}>Blog</Link>
        <input type="text" value={search} onChange={searchInputHandler} />
        <button onClick={buttonClickHandler}>Click Me</button>
      </nav>
    </header>
  );
}

export default Header;

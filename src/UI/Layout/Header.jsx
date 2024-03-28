import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <a href="/#user-header">
          <div className="text-black text-center text-2xl">
            ECOMMERCE
          </div>
        </a>

        <Link to={"users"}>
          <p className="bg-slate-400 text-white mt-2 p-1 px-5 rounded-xl">Users</p>
        </Link>
      </div>
    </>
  );
}

export default Header;

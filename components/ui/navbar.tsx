import React, { FC } from "react";

const NavBar: FC = ({ children }) => {
  return (
    <div className="navbar w-full inline-flex space-x-80 items-center justify-between px-24 py-5 bg-gray-700 shadow">
      <div className="logo flex space-x-2.5 items-center justify-center">
        <img className="cube1 w-8 h-full" src="cube.svg" />
        <p className="THEBLOCK text-sm font-bold text-blue-300">THE BLOCK</p>
      </div>
      <div
        className="actions flex space-x-10 items-center justify-center"
        style={{ width: 489, height: 37 }}
      >
        <div className="searchbar flex space-x-2.5 items-center justify-start w-72 px-4 py-2.5 bg-gray-800 border rounded-full border-gray-600">
          <p className=" text-sm text-blue-300"></p>
          <p className="Search... opacity-50 text-xs font-medium text-white">
            Search...
          </p>
        </div>
        <div className="loginsignup flex space-x-10 items-center justify-center">
          <p className="LOGIN text-sm font-medium tracking-wider leading-tight text-blue-300 capitalize">
            LOGIN
          </p>
          <div className="nft/button/primary flex items-center justify-center px-3 py-2 bg-blue-300 rounded">
            <p className="BUTTON text-sm font-medium tracking-wider leading-tight text-green-600 capitalize">
              SIGNUP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

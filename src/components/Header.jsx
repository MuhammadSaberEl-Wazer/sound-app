import React from "react";
import CenterMenu from "./CenterMenu";
import "./style.scss";

const Header = () => {
  const buttonStyle =
    "border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]";
  return (
    <div className="header bg-[#081730] flex flex-row flex-items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
      <a href="" id="_blank">
        <img
          src={require("../img/MuzicLogo.png")}
          alt=""
          className="logo w-[42px] h-[42px] m-0"
        />
      </a>
      <CenterMenu />

      {/* Side Menu */}
      <div className="buttons flex m-0">
        <button className={`mr-[35px] hover:bg-[#232A4E] ` + buttonStyle}>
          Sign up
        </button>
        <button id="log-in" className={buttonStyle + `bg-[#232A4E]`}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default Header;

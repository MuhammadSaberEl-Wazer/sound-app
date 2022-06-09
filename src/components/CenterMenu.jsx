import React from "react";
import "./style.scss"

const CenterMenu = () => {
  const lifeStyle = "mr-[3rem] hover:cursor-pointer";
  return (
    <div className="menu flex m-0">
      <ul className="flex w-[100%] justify-between">
        <li className={lifeStyle} >Home</li>
        <li className={lifeStyle} >About</li>
        <li className={lifeStyle} >Performer</li>
        <li className={lifeStyle} >Event Shedule</li>
      </ul>
    </div>
  );
};

export default CenterMenu;

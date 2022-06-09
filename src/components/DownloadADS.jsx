import React from "react";
import "./style.scss"

function DownloadADS() {
  const downloadimgstyle = " rounderd-[13px] h-[3rem] w-[10rem] mt-[0.5rem]";
  /*border-[2px] border-[#232A4E]*/
  return (
    <div className="download">
      <div className="download_images flex">
        <img
          src={require("../img/App Store.png")}
          alt="App Store"
          className={downloadimgstyle + ` mr-[2rem] `}
        />
        <img
          src={require("../img/Google Play.png")}
          alt="Google Store"
          className={downloadimgstyle}
        />
      </div>
    </div>
  );
}

export default DownloadADS;

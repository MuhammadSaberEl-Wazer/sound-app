import React from "react";
import MusicPlayer from "./MusicPlayer";

function Search() {
  return (
    <div className="search relative h-[56rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem]  flex items-center justify-between rounded-b-[5rem] z-[1] ">
      {/*Left Site*/}

      <div className="left flex-1">
        <img
          src={require("../img/backgraphics.png")}
          alt="Google Store"
          className="absolute top-[17rem] left-[-47rem] "
        />
        <img
          src={require("../img/d1.png")}
          alt="Google Store"
          className="absolute w-[16rem] top-[21rem] "
        />
        <img
          src={require("../img/d2.png")}
          alt="Google Store"
          className="absolute top-[27.7rem] left-[8.5rem] w-[9rem] "
        />
        <img
          src={require("../img/d3.png")}
          alt="Google Store"
          className="absolute top-[28rem] left-[17.5rem] w-[9rem] "
        />
        <img
          src={require("../img/d4.png")}
          alt="Google Store"
          className="absolute top-[45rem] left-[10rem] w-[17rem] "
        />
      </div>

      {/*Right Site*/}

      <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[6rem]">
        {/*Search*/}
        <div className="searchbar flex justify-start w-[100%] ">
          <input
            type="text"
            placeholder="Enter The Keyword or URL"
            className="flex-[19] outline-none bg-[#020917] rounded-xl h-[3rem] p-3"
          />
          {/* Search Icon */}
          <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem] ">
            <img
              src={require("../img/search.png")}
              alt="Search Bar"
              className=" w-[1.5rem] "
            />
          </div>
        </div>
        {/* Tild Icon */}
        <div className="tild flex justify-start items-center mt-7 w-[100%] ">
          <img
            src={require("../img/Path 318.png")}
            alt="tild"
            className=" w-[5rem] "
          />
        </div>

        {/* paragraph */}
        <div className="detail flex flex-col mt-5 text-4xl">
          <span>Search Sound by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="text-sm mt-3 text-[#4D586A]">
            Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
            eget. Vestibulum ullamcorper <br /> volutpat varius.
          </span>
        </div>

        <MusicPlayer />
      </div>
    </div>
  );
}

export default Search;

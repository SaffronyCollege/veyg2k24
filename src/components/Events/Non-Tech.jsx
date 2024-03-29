import React, { useEffect, useState } from "react";
import Navbar from "../navbar.jsx";
import banner from "../../assets/gamingPageBanner.webp";
import mobilebanner from "../../assets/m-gamingbanner.webp";
import gullycricket from "../../assets/gullycricket.png";
import codm from "../../assets/codm.jpeg";
import pentalon from "../../assets/pentalon.png";
import { useNavigate} from "react-router-dom";
import transition from "../../transition.js";
import Footer from "../Footer.jsx";
import Gameloader from "../Gameloader.js";

const NonTech = () => {
  const navigate = useNavigate();
  
  const handleFifaCardClick = () => {
    navigate("/events/non-technical/GullyCricket");
  };
  const handleGt7CardClick = () => {
    navigate("/events/non-technical/Pentathlon");
  };

  const [loading, setLoading] = useState(true);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Veyg 2k24";
    document.title = "Non-Technical-Event";
    const delay = setTimeout(() => {
     setIsLoading(false);
   }, 3000);

   return () => clearTimeout(delay);
  }, []);

 




  return (
    <div className="wrapper">
       {isLoading ? (
        <Gameloader/>
      ) : (
        <>
      <Navbar />
      <div className="wrapper overflow-x-hidden font-varino mb-5">
        <div className="relative">
        <img src={banner} alt="gamingBanner" className="m-hide" />
        <img src={mobilebanner} alt="gamingBanner" className="lg:hidden" />
          <div className="flex justify-center">
            <div className="gaming font-varino uppercase text-[140px] absolute -bottom-12 z-10 m-gaming">
              Non-Tech Event
            </div>
          </div>
          <div className=" absolute w-[100vw] h-[100px] gamingbanneroverlay m-gamingbanneroverlay -bottom-[3rem] flex justify-center items-center"></div>
        </div>
        <div className="text-center text-neutral-300 text-opacity-90 text-[30px] font-medium font-readex mt-[7rem] z-10 m-gaming-desc">
       
        </div>
        <div className="flex flex-col text-white mb-10 flex-wrap m-gamecard gap-16 mt-[7rem]">
          <div className="flex flex-row justify-center gap-12 game-card-1 ">
          

    
          </div>
          <div className="">
           
          </div>
          <div className="flex flex-row justify-center gap-12 game-card-1">
            <div
              onClick={handleFifaCardClick}
              className="rounded-[66px] fifagamingcard fifa m-fifa"
            >
              <div className="w-[550px] h-[400px] text-center  flex justify-center cursor-pointer  relative grayscale hover:grayscale-0 transition-all duration-[600ms] ease-in-out m-fifa">
                <div className="overlay m-overlay"></div>
                <img
                  src={gullycricket}
                  alt="GullyCricket"
                  className="p-4 h-[400px] w-[550px] rounded-[80px] absolute m-fifa-img "
                />
               
              </div>
            </div>
            <div
              onClick={handleGt7CardClick}
              className="rounded-[66px] assetocorsagamingcard assetocorsa m-assetocorsa"
            >
              <div className="w-[550px] h-[400px] text-center  flex justify-center cursor-pointer  relative grayscale hover:grayscale-0 transition-all duration-500 ease-in-out m-assetocorsa">
                <div className="overlay m-overlay"></div>
                <img
                  src={pentalon}
                  alt="Pentathlon"
                  className="p-4 h-[400px] w-[550px] rounded-[80px] absolute m-assetocorsa-img "
                />
                {/* <div className="flex text-center justify-center items-center text-[60px] z-10 assetotext max-w-[35px] m-assetocorsatext">
                  Grant Truismo 7
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[2rem] justify-center items-center align-middle mx-auto">

      <Footer/>
      </div>
      </>
      )}
    </div>
  );
};

export default transition(NonTech);
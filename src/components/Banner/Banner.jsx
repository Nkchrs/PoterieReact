import React from "react";
import Pots from "../../assets/Png/pot1.png";
import Pot from "../../assets/Png/pot2.png";
import Prot from "../../assets/Png/pot4.png";
import ButtonPrimaire from "../shared/ButtonPrimaire";


const Banner = () =>{
    return (
        <>
        <div className="container py-14 relative">
            <div>
            <h1 className="py-8 tracking-wider font-cursive text-4xl font-bold text-secondaire text-center">TEMA LA CLASS</h1>
            <div className="space-y-10">
                <div className="grid  grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                    <div>
                        <p data-aos="fade-up-left" >{" "}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="grid  grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                    <div></div>
                    <div>
                        <p data-aos="fade-up-left" >{" "}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                </div> 
            </div>
            <div className="absolute top-10 right-12  opacity-50 sm:bottom-0 ">
                <img src={Pot} alt=""className="max-w-[240px]"></img>
            </div>   
            <div className="absolute bottom-0 -left-18 opacity-50 sm:bottom-0">
                <img src={Prot} data-aos="flip-left" alt="" className="max-w-[240px]"></img>
                </div>

        </div>
        </>
    );
};


export default Banner
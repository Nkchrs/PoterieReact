import React from "react";
import HeroImg from "../../assets/hero.png";
import ButtonPrimaire from "../shared/ButtonPrimaire";
import HeroBg from "../../assets/bg.jpg"

const BgStyle = {
    backgroundImage:`url(${HeroBg}) `,
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    backgroundSize : "cover",
    width:"100%",
    height:"100%",

};
const Hero = () => {
    return (
        <>
        <div style ={BgStyle} className=" relative z-[-1]">
            <div className="container py-16 sm:py-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
<div className="space-y-4 text-gray-700 order-2 sm:order-1">
    <h1 data-aos="fade-up" 
    className="text-4xl">Bienvenue sur le site
     <span className="text-secondaire font-cursive text-6xl"> Mel'in Pots</span></h1>
    <p data-aos="fade-up" data-aos-delay="300"
    className="lg:pr-64">Votre destination pour des créations en poterie uniques et artisanales. Chaque pièce est fabriquée avec amour et soin, capturant l'essence de l'artisanat traditionnel tout en ajoutant une touche moderne.</p>
    <div data-aos="fade-up"data-aos-delay="500">
        <ButtonPrimaire/>
    </div>
</div>
<div   data-aos="zoom-in" data-aos-delay="500" 
 className="relative z-30 order-1 sm:order-1">
    <img src={HeroImg} alt=""
    className="w-[600px] sm:scale-125 sm:translate-y-16"></img>
</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Hero
import React from "react";
import Img1 from "../../assets/kaka.png";
import Img2 from "../../assets/Potcuivre.png";
import Img3 from "../../assets/Ceramike.png";

const PresentationData = [
    {
        id :5,
        img:Img1,
        name:"Cémérique",
        description:"Crois pas c'est moi ki é fait so la",
        aosDelay:"100"
    },
    {
        id :6,
        img:Img2,
        name:"crooootte",
        description:"Crois pas c'est moi ki é fait so la",
        aosDelay:"100"
    },
    {
        id :7,
        img:Img3,
        name:"big crooote",
        description:"Crois pas c'est moi ki é fait so la",
        aosDelay:"100"
    }
 ];

const Presentation = () => {
    return (
        <div className="py-10">
            <div className="container">
                <div className="text-center mb-20">
            <h1 className="tracking-wider 
            font-cursive text-4xl
            font-bold
             text-secondaire"> Mes petites Créations</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                    {PresentationData.map ((data,index) => {
                        return(
                            <div 
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={{index}}
                            className="rounded-2xl bg-white hover:bg-secondaire hover:text-white shadow-xl duration-200 max-w-[300px] group relative">
                                
                                <div className="h-[122px]">
                                <img src={data.img} alt="" className=" max-w-[170px] block mx-auto transform  -translate-y-14 group-hover:scale-110
                                group-hover:rotate-6 duration-300"/>
                                </div>
                                <div className="p-4 text-center">
                                <h1 className="text-xl font-bold">{data.name}</h1>
                                <p className="text-primaire group-hover:text-primaire duration-300 text-sm line-clamp-2">{data.description}</p>
                                </div>
                                </div>
                        )

                    })
                    }
                </div>
            </div>
        </div>
    )
}


export default Presentation
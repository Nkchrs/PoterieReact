import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";


const ButtonPrimaire =()=>{
    return (
        <>
        <div className="flex items-center group">
            <button className=" bg-secondaire h-[30] py-6 px-6 font-bold
                rounded-[18px] gap-2"> Weeeeesh !</button>
             <FaCircleArrowRight className="inline-block group-hover:!translate-x-2 duration-200 h-[30px] w-[30px] rounded text-base"/>
        
        </div>
        </>
    )
}


export default ButtonPrimaire
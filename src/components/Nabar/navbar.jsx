import { data } from "autoprefixer";
import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaUser } from "react-icons/fa6";

const NavLinks = [
{
    id: 1,
    name: "Home" ,
    link: "/#",
},
{
    id: 1,
    name: "About" ,
    link: "/#",
},
{
    id: 1,
    name: "Contact" ,
    link: "/#",
}
];

const CategorieLinks = [
    {
        id: 1,
        name: "faïence" ,
        link: "/#",
    },
    {
        id: 2,
        name: "Porcelaine" ,
        link: "/#",
    },
    {
        id: 3,
        name: "Grès" ,
        link: "/#",
    }
];

const Navbar = () =>{
    return (
        <>
        <div className="bg-white shadow-sm">
            <div className="container flex justify-between py-4 sm:py-3">
                {}
                <div className="font-bold text-3xl">Mel'in Pots</div>
                {}
                <div>
                <ul className="flex items-center gap-10">
                    {NavLinks.map(({id, name, link})=>(
                        <li key={id}>
                            <a href={link}
                            className="inline-block hover:text-primaire text-xl font-semibold "
                            >{name}</a>
                        </li>
                    ))}
                    {}
                    <li className="cursor-pointer group">
                         <a
                        href="/#"
                        className="inline-block hover:text-primaire text-xl font-semibold"
                        >
                             <div className="flex items-center gap-[2px] py-2">
                           Categorie
                                <span>
                            <IoIosArrowDropdownCircle className="group-hover:rotate-180 duration-300" />
                                </span>
                            </div>
                        </a>
                        {}
                        <div className="absolute z-[9999] hidden
                        group-hover:block w-[200px] bg-white text-black shadow-md">
                            <ul>
                            { CategorieLinks.map(({id,name,link})=> (
                                <li key={id}>
                                    <a
                                    href={link}
                                    className="inline-block
                                     hover:bg-primaire 
                                     text-xl font-semibol
                                     rounded-md p-2
                                     text-cursive"
                                     
                                    >
                                     {name}
                                    </a>
                                </li>
                                 ) )
                                }

                            </ul>
                        </div>
                    </li>
                    <li>
                        <button className="flex justify-center items-center gap-2 bg-secondaire rounded-[10px]
                        text-xl h-[40px] text-gray-50 font-bold py-5 px-4 hover:scale-105 duration-300">
                            <FaUser/>
                            Mon compte

                        </button>
                    </li>
                 </ul>
                </div>
            </div>
        </div>
        </>
    )
}




export default Navbar
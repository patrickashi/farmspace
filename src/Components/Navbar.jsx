import React, {useState} from "react"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
// import blackbullLogo from "../Assets/blackbullLogo.jpg"
import pekodev from "../Assets/pekodev.webp";


const  Navbar = ({ handleContactClick }) => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        // the opposite of nav
        setNav(!nav)
    }

    const handleLinkClick = (sectionId) => {
        setNav(!nav); // Close the navbar
        if (sectionId) {
          document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
        }
      };
    return ( 
        <div className="flex justify-between items-center fixed top-0 left-0 right-0 z-50 py-2 bg-[#93b59f] px-2 md:px-6 text-white font-Montserrat ">
            <div>
                {/* <img className="w-14 rounded-full" src={pekodev} size={20} alt="logo" /> */}
                <div className="flex align-middle ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-white font-semibold align-middle ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                    </svg>

                    <h2 className="text-white font-semibold text-xl ml-2 mt-1">FARMSPACE</h2>
                </div>
            </div>
            
            <div>
                <ul className="hidden mobile:hidden  md:flex lg:flex xl-flex 2xl:flex text-white mx-auto py-4 ">
                    <li className="p-2 text-sm font-bold hover:text-[#1e5036]  hover:cursor-pointer"><a href="#services">Services</a></li>
                    <li className="p-2 text-sm font-bold hover:text-[#1e5036]  hover:cursor-pointer"><a href="#about">About Us</a></li>
                    <li className="p-2 text-sm font-bold hover:text-[#1e5036]  hover:cursor-pointer"><a href="#faq">FAQ</a></li>
                    <li className="p-2 text-sm font-bold hover:text-[#1e5036]  hover:cursor-pointer"><a href="#">Our work</a></li>
                    <li className="p-2 text-sm font-bold hover:text-[#1e5036] hover:cursor-pointer"><a href="#">Our Mission</a></li>
                    <li className="p-2 text-sm font-bold hover:bg-white duration-200 hover:text-black hover:cursor-pointer bg-[#1e5036] hover:bg rounded-full" onClick={() => { handleContactClick();  }}><a href="#contactus">Contact Us</a></li>
                    
                </ul>
            </div>


            <div onClick={handleNav} className="mobile:block md:hidden 2xl:hidden lg:hidden xl:hidden z-20">
                {nav ? <AiOutlineClose className="text-white z-80" size={20}/> : <AiOutlineMenu className="text-white" size={20}/>} 
            </div>

            {/* toggle menu */}
            <div className={nav ? "fixed left-0 top-0 h-full w-[90%] ease-out duration-500 bg-gray-100" : "fixed left-[-100%]"}>

                <div className="flex align-middle mt-4 ml-4 ">
                    <img className="w-14 rounded-full" src={pekodev} size={20} alt="logo" />
                    
                </div>

                <ul className="flex flex-col p-4 my-6 gap-16 text-black">
                    <li className="p-4 border-l border-blue-600" onClick={() => { handleLinkClick() } }><a href="#services">Services</a></li>
                    <li className="p-4 border-l border-green-600" onClick={() => { handleLinkClick() } }><a href="#about">About</a></li>
                    <li className="p-4 border-l border-red-600" onClick={() => { handleLinkClick() } }><a href="#faq">FAQ</a></li>
                    <li className="p-4 border-l border-green-600" onClick={() => { handleLinkClick() } }><a href="#">Our work</a></li>
                    <li className="p-4 border-l border-green-600" onClick={() => { handleLinkClick() } }><a href="#">Our Mission</a></li>
                    <li className="p-4 border-l border-pink-600" onClick={() => { handleContactClick(); handleLinkClick(); }}><a href="#contactus">Contact Us</a></li>
                </ul>

               
            </div>
        </div>
     );
}
 
export default Navbar;
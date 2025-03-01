import React from "react"
import pekodev from "../Assets/pekodev.webp";

const Footer = () => {
    return (
        <div className="px-4 md:px-20 py-10 bg-[#1e5036] duration-200 text-gray-200 border-t   border-gray-300">
            <div className="flex gap-16 flex-col md:flex-row justify-between border-b border-gray-300 pb-4">
                <div>
                    <div className="flex align-middle hover:text-black ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 font-semibold align-middle ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                        </svg>

                        <h2 className="font-semibold text-xl ml-2 ">FARMSPACE</h2>
                    </div>

                    {/* <img src={pekodev} className="w-12 mt-6 rounded-full" alt="logo" /> */}

                </div>
                <div>
                    <h1 className="font-bold mb-4">Menu</h1>
                    <ul className="flex flex-col gap-2">
                        <li>Services</li>
                        <li>About</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold mb-4">Contact</h1>
                    <ul className="flex flex-col gap-2">
                        <li>+234 703 488 9147</li>
                        <li>tijjanali@mail.com</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold mb-4">Address</h1>
                    <ul className="flex flex-col gap-2">
                        <li>Makurdi, 2565</li>
                        <li>Benue State, Nigeria</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold mb-4">Social</h1>
                    <ul className="flex flex-col gap-2">
                        <li>Facebook</li>
                        <li>LinkedIn</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between mt-4 text-xs">
                <div>Pricacy Policy</div>
                <div>©2025 Tijjani Ali Lawal - farmspace Technology</div>
            </div>
        </div>
    )
}

export default Footer;
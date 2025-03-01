import React from "react"
import farmspacelogo_white from "../Assets/farmspacelogo_white.png";

const Footer = () => {
    return (
        <div className="px-4 md:px-20 py-10 bg-[#1e5036] duration-200 text-gray-200 border-t   border-gray-300">
            <div className="flex gap-16 flex-col md:flex-row justify-between border-b border-gray-300 pb-4">
                <div>

                    <img src={farmspacelogo_white} className="w-28" alt="logo" />

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
import React from "react"
import leahyurfset from "../Assets/leahyurfset.jpg";
import nelayliuay from "../Assets/nelayliuay.jpg";
import roygold from "../Assets/roygold.jpg";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Testimonials = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div className="px-4 md:px-20 py-20  duration-200">
            <div ref={ref} className={` transition-transform duration-200 ${isVisible ? 'animate-slideIn' : '-translate-x-1'}`}>
                <button className="border rounded-tr-xl px-2 py-1 text-xs font-semibold bg-gray-800 text-gray-100 font-mono">TESTIMONIALS</button>
                <h2 className="mt-4 mb-8 text-3xl md:text-4xl font-mono text-gray-800">What Are Our Clients Saying</h2>
            </div>

            <div className="flex flex-row">
                <div className="flex flex-col">
                    <div className="flex justify-center border border-gray-400 py-8 px-2 md:6 w-100">
                        <img src={leahyurfset} alt="img" className=" w-80 h-60 rounded-lg object-cover"/>
                    </div>
                    <div className="text-center w-100 border border-gray-400 py-6 px-2 md:6">
                        <p className="text-gray-600 mb-4 text-sm">This is the space to share a review from one of the business's clients or customers.</p>
                        <p className="text-gray-900 font-semibold">Leah Yurfset</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-center border border-gray-400 py-8 px-2 md:6 w-100">
                        <img src={roygold} alt="img" className=" w-80 h-60 rounded-lg object-cover"/>
                    </div>
                    <div className="text-center w-100 border border-gray-400 py-6 px-2 md:6">
                        <p className="text-gray-600 mb-4 text-sm">This is the space to share a review from one of the business's clients or customers.</p>
                        <p className="text-gray-900 font-semibold">Roy Gold</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-center border border-gray-400 py-8 px-2 md:6 w-100">
                        <img src={nelayliuay} alt="img" className=" w-80 h-60 rounded-lg object-cover"/>
                    </div>
                    <div className="text-center w-100 border border-gray-400 py-6 px-2 md:6">
                        <p className="text-gray-600 mb-4 text-sm">This is the space to share a review from one of the business's clients or customers.</p>
                        <p className="text-gray-900 font-semibold">Nela Yliuay</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;
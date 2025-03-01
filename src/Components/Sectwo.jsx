import React from "react"
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Sectwo = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <div className="px-4 md:px-20 py-32 bg-[#f8f4f4] text-black">
            <div ref={ref} className={`w-full md:w-[700px]  transition-transform duration-100 ${isVisible ? 'animate-slideIn' : '-translate-x-1'}`}>
                <button className="mb-6 bg-white text-xs font-semibold text-gray-800 py-1 px-2 rounded-tr-xl">SERVICES</button>
                <h2 className="text-3xl md:text-5xl mb-4">
                    Tailored Insurance
                    Every Stage Of Life.
                </h2>
            </div>
        </div>
    )
}

export default Sectwo;
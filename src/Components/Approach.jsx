import React from "react"
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Approach = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div className="px-4 md:px-20 pt-20  duration-200 bg-[#BCD2EC]">
            <div ref={ref} className={`w-full md:w-[700px] transition-transform duration-100 ${isVisible ? 'animate-slideIn' : '-translate-x-1'}`}>
                <button className="border rounded-tr-xl px-4 py-1 text-xs font-mono font-semibold bg-gray-100 text-gray-800">APPROACH</button>
                <h2 className="mt-4 mb-8 text-3xl md:text-4xl font-mono text-gray-800">Our goal is to protect what you care about most</h2>
            </div>

            <div className="py-20 px-4 md:px-10 bg-[#1B2F27] text-gray-100 text-3xl  md:rounded-tr-[100px] ">
                <p className="text-start">
                    This is the space to introduce visitors to the business or brand. Briefly explain who's behind it,
                    what it does and what makes it unique. Share its core values and what this site has to offer.
                </p>
            </div>
        </div>

    )
}

export default Approach;
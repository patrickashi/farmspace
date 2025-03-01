import React from "react"
import banner1 from "../Assets/banner1.jpg"
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Secone = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div className="flex justify-center text-center mx-4 md:mx-20 py-20 mt-10 mb-12 text-gray-100">
            <div ref={ref} className={`w-full md:w-[600px]  transition-transform duration-100 ${isVisible ? 'animate-slideIn' : '-translate-x-1'}`}>
                <h2 className="text-5xl md:text-6xl mt-8">Farm Irrigation System You Can Count On</h2>
                <p className="my-6 text-xl">
                    We combat climate change through mitigation and adaptation, removing carbon  and building
                    climate resilient communities and landscapes 
                </p>
                <button className="bg-white text-gray-800 hover:bg-[#1e5036] hover:text-white duration-200 px-4 rounded-full py-2 font-semibold">
                    How it Works
                </button>
            </div>


        </div>
    )
}

export default Secone;
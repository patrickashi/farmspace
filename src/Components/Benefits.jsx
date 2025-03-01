import React from "react"
import useIntersectionObserver from "../hooks/useIntersectionObserver";


const Benefits = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div className="px-4 md:px-20 pt-20  duration-200">
            <div ref={ref} className={`w-full md:w-[700px] transition-transform duration-100 ${isVisible ? 'animate-slideIn' : '-translate-x-1'}`}>
                <button className="border rounded-tr-xl px-4 py-1 text-xs font-mono font-semibold bg-gray-800 text-gray-100">BENEFITS</button>
                <h2 className="mt-4 mb-8 text-3xl md:text-4xl font-mono text-gray-800">Strength that speaks for itself</h2>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4 py-10 text-gray-800 text-3xl ">
               <div className=" clip-path-quadrilateral py-10 flex flex-col justify-center hover:scale-105 hover:text-gray-800 duration-200 cursor-pointer">
                    <h2 className="text-3xl px-10 mb-10 text-center font-semibold">Availability</h2>
                    <p className="text-center px-10 text-xl">Use this space to promote the business, its products or its services.</p>
                </div>
               <div className="clip-path-quadrilateral py-10 flex flex-col justify-center hover:scale-105 hover:text-gray-800 duration-200 cursor-pointer">
                    <h2 className="text-3xl px-10 mb-10 text-center font-semibold">Efficiency</h2>
                    <p className="text-center px-10 text-xl">Use this space to promote the business, its products or its services.</p>
               </div>
               <div className="clip-path-quadrilateral py-10 flex flex-col justify-center hover:scale-105 hover:text-gray-800 duration-200 cursor-pointer">
                    <h2 className="text-3xl px-10 mb-10 text-center font-semibold">Trust</h2>
                    <p className="text-center px-10 text-xl">Use this space to promote the business, its products or its services.</p>
               </div>
            </div>
        </div>

    )
}

export default Benefits;
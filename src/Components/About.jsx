import React from "react"
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import aboutpng from "../Assets/aboutpng.png";


const About = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div className="flex flex-col md:flex-col lg:flex-row gap-12 px-4 md:px-20 pt-20  duration-200 bg-[#1B2F27] border-t border-gray-300">
            <div ref={ref} className={`w-full md:w-[700px] transition-transform duration-100 ${isVisible ? 'animate-slideIn' : '-translate-x-1'}`}>
                <button className="border rounded-tr-xl px-4 py-1 text-xs font-mono font-semibold bg-gray-100 text-gray-800">ABOUT</button>
                <h2 className="mt-4 mb-8 text-3xl md:text-4xl font-mono text-gray-200">All About Belsurance</h2>
            </div>

            <div className="custom-scrollbar flex flex-col h-80 overflow-y-scroll  justify-between gap-4 py-10 text-gray-200 text-md mb-4 md:mb-20 ">
                <p>
                    This is a space to share more about the business. Take advantage of this long text to tell people who's behind it, what it does,
                    how it began, and other details. It's an excellent place to share the story behind the business and describe what this site has
                    to offer its visitors.
                </p>
                <p>
                    You can write about the business's history here, from its founding until now. Draw readers in with an engaging narrative. By telling
                    its story, you can help people connect to the business. Share what inspired its creation and what need it was meant to fill. You can include details of the obstacles it overcame to get where it is today.
                </p>
                <p>
                    This space is also a good spot to talk about a particular feature of the business that sets it apart from its competitors. Explain to readers what makes this business unique and why they should choose it over
                    other options. Focus on the value this business can offer its users.
                </p>
                <p>
                Let visitors to this website know that they'll find what they're looking for right here. Present the business as the solution to a specific problem and highlight the ways the business's products or services can make life better for people.
                </p>
                <p></p>
            </div>

            <div className="flex items-end justify-center">
              <img src={aboutpng} alt="img" className="w-80 md:w-[600px]" />
            </div>
        </div>

    )
}

export default About;
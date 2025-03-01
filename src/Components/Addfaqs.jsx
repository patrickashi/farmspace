import React, { useState } from 'react';

const Addfaqs = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="faq-section p-4 border-b border-gray-300 w-full max-w-md mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-md font-semibold">Where can I add my FAQs?</h2>
        <button onClick={toggleVisibility} className="focus:outline-none">
          {isVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>
      </div>
      {isVisible && (
        <p className="mt-4 text-gray-700">
          FAQs can be added to any page on your site or to your Wix mobile app,
           giving access to members on the go.
        </p>
      )}
    </div>
  );
};

export default Addfaqs;

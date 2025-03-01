import React, { useState } from 'react';

const Choosecategory = () => {
  const [option, setOption] = useState('general');

  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-40 p-4">
      <div className="mb-4 w-full">
        <label className="block mb-2">Choose a Category:</label>
           <select
            value={option}
            onChange={handleOptionChange}
            className="p-2 border border-gray-300 rounded w-full"
            >
          <option value="general">General</option>
          <option value="setting">Setting</option>
        </select>
      </div>
      <div className="w-full max-w-md p-4 border border-gray-300 rounded">
        <p> {option}</p>
      </div>
    </div>
  );
};

export default Choosecategory;

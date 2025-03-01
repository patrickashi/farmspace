import React, { useState } from 'react';

const Searchcomponent = () => {
  const [query, setQuery] = useState('');
  const [data] = useState([
    'contact info',
    'user policy',
    'Partners',
    'address',
    'values',
    '',
    'email',
  ]); // Sample data

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        className="p-2 border border-gray-300 rounded mb-4 w-full font-mono text-sm"
        placeholder="looking for something?"
      />
      {filteredData.length > 0 ? (
        <ul className="w-full ">
          {filteredData.map((item, index) => (
            <li key={index} className="p-2 border-b border-gray-300 text-start md:text-center">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 mt-4 w-80">
          Sorry, we could not find any results to match your search criteria.
          Please try again with some different keywords.
        </p>
      )}
    </div>
  );
};

export default Searchcomponent;

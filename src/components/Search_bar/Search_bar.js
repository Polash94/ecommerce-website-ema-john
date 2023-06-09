import React from 'react';

const Search_bar = () => {
    return (
        <div class='bg-gray-400 h-10 flex justify-center '>
            <div>
            <input class=' mt-2 pl-2 rounded-lg w-80' type="text" placeholder='Search here'/>
            </div>

        <div class='ml-5 mt-1'>
        
        <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="2em"
      width="2em">
      <path d="M17 18c-1.11 0-2 .89-2 2a2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2M1 2v2h2l3.6 7.59-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 002 2h12v-2H7.42a.25.25 0 01-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 00-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2z" />
    </svg>
    </div>
        </div>
    );
};

export default Search_bar;
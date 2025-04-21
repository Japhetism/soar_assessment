import React, { useState } from 'react';
import SEARCH_SVG from '../../assets/icons/search';

interface SearchInputProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = "Search...", onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        className="w-full h-[50px] text-[#232323] py-2 pl-12 pr-4 border border-[#F5F7FA] bg-[#F5F7FA] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#8BA3CB]"
        placeholder={placeholder}
      />
      <button
        onClick={handleSearch}
        className="absolute top-0 left-0 flex items-center justify-center h-full w-10 pl-5"
        aria-label="Search"
      >
        <SEARCH_SVG />
      </button>
    </div>
  );
};

export default SearchInput;

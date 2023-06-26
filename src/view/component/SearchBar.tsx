import React, { useState } from "react";
import * as IconBi from "react-icons/bi";
interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className=" bg-purple-700 border-2 border-purple-700 rounded-lg items-center flex-row w-full justify-between flex"
    >
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        className="w-[90%] bg-white rounded-md p-1 focus:outline-none focus:shadow-outline focus:ring-purple-700 focus:border-purple-700"
        color="bg-black"
      />
      <button type="submit" className="pr-2 text-white">
        <IconBi.BiSearchAlt></IconBi.BiSearchAlt>
      </button>
    </form>
  );
};

export default SearchBar;

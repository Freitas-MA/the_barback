'use client'
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    // Navegue para a página de pesquisa com o termo de pesquisa na URL
    router.push(`/search?term=${encodeURIComponent(searchTerm.toLocaleLowerCase())}`);
  };

  return (
    <div className="flex items-center justify-start px-2">
      <input
        className="bg bg-white-400 border border-gray-200 z-10 w-full rounded-sm shadow-lg m-1 px-2 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
        type="text"
        name="searchCocktail"
        id="searchInput"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="flex justify-center items-center gap-2 border border-gray-200 bg bg-green-400 pl-2 pr-1 shadow-lg rounded-md -translate-x-2 z-0"
        type="submit"
        onClick={handleSearch}
      >
        <IoMdSearch />
        Search
      </button>
    </div>
  );
}

import { Search } from "lucide-react";

const SearchBar = () => {
    return (
        <div className="hero-content mt-6 md:mt-10 w-full max-w-2xl bg-white rounded-full p-2 flex items-center shadow-lg">
            <div className="pl-4 text-gray-400">
                <Search size={20} />
            </div>
            <input
                type="text"
                placeholder="Course, topic, creator"
                className="flex-grow bg-transparent border-none outline-none px-4 text-gray-700 placeholder-gray-400 w-full text-sm md:text-base"
            />
            <button className="bg-[#D4FF00] hover:bg-[#c2eb00] text-black font-semibold px-6 md:px-8 py-2 md:py-3 rounded-full transition-colors whitespace-nowrap text-sm md:text-base">
                Search
            </button>
        </div>
    );
};
export default SearchBar;
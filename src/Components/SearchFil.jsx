/* eslint-disable react/prop-types */
import { FaSearch } from "react-icons/fa";

const SearchFil = ({handleSearch}) => {
    
  return (
    <div>
      <form className="flex items-center gap-2 max-w-xs" onSubmit={handleSearch}>
        <label className="input input-bordered ">
          <input type="text" name="search" placeholder="Search" />
        </label>
        <button  className="btn bg-orange-500">
            <FaSearch size={25}></FaSearch>
          </button>
      </form>
    </div>
  );
};

export default SearchFil;

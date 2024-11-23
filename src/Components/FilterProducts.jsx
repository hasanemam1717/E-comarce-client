/* eslint-disable react/prop-types */
import { CiFilter } from "react-icons/ci";

const FilterProducts = ({
  setCategory,
  setBrand,
  handleReset,
  uniqeBrand,
  uniqeCategory,
}) => {
  return (
    <div className="w-full bg-orange-50 min-h-screen">
      <div className="flex gap-4 p-4 items-center justify-center font-semibold">
        <CiFilter size={20}></CiFilter>
        <h1>Filter</h1>
      </div>
      <div className="flex gap-3 ">
        <select
          className="select select-error w-full max-w-xs"
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        >
          <option value="">Brand</option>
          {uniqeBrand.map((b, i) => (
            <option value={b} key={i}>
              {b}
            </option>
          ))}
        </select>
        <select
          className="select select-error w-full max-w-xs"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="">Category</option>
          {uniqeCategory.map((b, i) => (
            <option value={b} key={i}>
              {b}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-5 w-full">
        <button
          onClick={handleReset}
          className="btn w-full bg-orange-600 text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default FilterProducts;

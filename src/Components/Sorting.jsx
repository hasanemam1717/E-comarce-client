/* eslint-disable react/prop-types */


const Sorting = ({setSort}) => {
  return (
    <div>
      <select className="select select-error w-full max-w-xs" onChange={(e)=>{setSort(e.target.value)}}>
        <option value="asc">Low to high</option>
        <option value="dsc">High to low</option>
      </select>
    </div>
  );
};

export default Sorting;

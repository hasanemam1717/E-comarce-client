import { useEffect, useState } from "react";
import DashProducts from "../Components/DashboardComponent/DashProducts";
import FilterProducts from "../Components/FilterProducts";
import SearchFil from "../Components/SearchFil";
import Sorting from "../Components/Sorting";
import axios from "axios";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Products = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");

  const [brand, setBrand] = useState("");
  const [uniqueBrand, setUniqeBrand] = useState([]);
  const [category, setCategory] = useState("");
  const [uniqeCategory, setUniqeCategory] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [totalPage, setTotalPage] = useState();
  // console.log("total page" ,totalPage);
  const handlePagination = (newPage) => {
    // console.log("New page",newPage);
    if (newPage > 0 && newPage <= totalPage) {
      setPageCount(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };
  const handleReset = () => {
    setBrand("");
    setCategory("");
    setSort("");
    setSearch("");
    window.location.reload();
  };

  const [products, setProducts] = useState([]);
  console.log(products);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetch = () => {
      axios
        .get(
          `http://localhost:5000/allProducts?title=${search}&page=${pageCount}&limit=${9}&sort=${sort}&category=${category}`
        )
        .then((res) => {
          // console.log(res.data);
          setProducts(res.data.result);
          setUniqeBrand(res.data.brands);
          setUniqeCategory(res.data.categorys);
          setLoading(false);
          // console.log("test", Math.ceil(res.data.totalProducts/9));
          setTotalPage(Math.ceil(res.data.totalProducts/9));
        });
    };
    fetch();
  }, [search, sort, brand, category, pageCount]);
  return (
    <div>
      <div>
        <h1 className="text-center text-2xl text-orange-600 font-semibold">
          All products
        </h1>
        <div className="lg:flex items-center  justify-between ">
          <div>
            <SearchFil handleSearch={handleSearch}></SearchFil>
          </div>
          <div>
            <Sorting setSort={setSort}></Sorting>
          </div>
        </div>
        <div className="grid lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-3">
            <FilterProducts
              setBrand={setBrand}
              setCategory={setCategory}
              handleReset={handleReset}
              uniqeBrand={uniqueBrand}
              uniqeCategory={uniqeCategory}
            ></FilterProducts>
          </div>
          <div className="col-span-1 lg:col-span-9">
            <DashProducts loading={loading} products={products}></DashProducts>
            <div className="flex gap-5 lg:text-2xl justify-center bottom-0 text-white lg:p-3 p-1 mx-auto bg-orange-600 w-full rounded-md lg:w-1/3">
              <button disabled={pageCount===1} className="btn" onClick={()=>handlePagination(pageCount-1)}>
                <FaArrowAltCircleLeft size={20}></FaArrowAltCircleLeft>
              </button>
              <button className="" >
                {pageCount} of {totalPage}
              </button>
              <button  className="btn" onClick={()=>handlePagination(pageCount+1)} disabled={pageCount===totalPage}>
                <FaArrowAltCircleRight  size={20}></FaArrowAltCircleRight>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Products;

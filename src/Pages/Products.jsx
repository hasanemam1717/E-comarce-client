import { useEffect, useState } from "react";
import DashProducts from "../Components/DashboardComponent/DashProducts";
import FilterProducts from "../Components/FilterProducts";
import SearchFil from "../Components/SearchFil";
import Sorting from "../Components/Sorting";
import axios from "axios";

const Products = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");

  const [brand, setBrand] = useState("");
  const [uniqueBrand, setUniqeBrand] = useState([]);
  const [category, setCategory] = useState("");
  const [uniqeCategory, setUniqeCategory] = useState([]);
  console.log(sort, search, brand, category, uniqeCategory, uniqueBrand);
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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetch = () => {
      axios
        .get(
          `http://localhost:5000/allProducts?title=${search}&sort=${sort}&category=${category}`
        )
        .then((res) => {
          // console.log(res.data);
          setProducts(res.data.result);
          setUniqeBrand(res.data.brands);
          setUniqeCategory(res.data.categorys);
          setLoading(false);
          
        });
    };
    fetch();
  }, [search, sort, brand, category]);
  return (
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
        </div>
      </div>
    </div>
  );
};

export default Products;

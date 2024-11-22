import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://e-comarce-server-five.vercel.app/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
      <h1>
        Product Images: High-quality images of the products. Product Names:
        Concise and descriptive names. Brief Descriptions: Highlight key
        features or benefits. Pricing: Display the price or a call to action,
        View Details
      </h1>
    </div>
  );
};

export default FeaturedProducts;

import ProductCard from "../../Components/ProductCard";


const FeaturedProducts = () => {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
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

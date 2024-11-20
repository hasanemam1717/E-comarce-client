const ProductCard = () => {
  return (
      <div className="container mx-auto p-4 lg:p-8 ">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105">
          <div className="relative">
            <img
              src="https://img.freepik.com/free-photo/collection-cosmetics-bottles-jars_23-2147787926.jpg?t=st=1732142032~exp=1732145632~hmac=46f7c77f587106c8eed162c00315ac0bffd0e050e5ebf12ca876ef8c905a0235&w=740"
              alt="Wireless Bluetooth Headphones"
              className="w-full h-80 object-cover"
            />
            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              In Stock: 20
            </div>
            <div className="absolute bottom-2 right-2 bg-yellow-400 text-gray-900 text-sm px-2 py-1 rounded flex items-center">
              ⭐ 4.8 / 5
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800 truncate">
              Wireless Bluetooth Headphones
            </h2>
            <p className="mt-2 text-gray-600 text-sm">
              Experience high-quality sound with our wireless headphones.
              Featuring noise cancellation, long battery life, and a comfortable
              fit.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xl font-bold text-blue-600">$129.99</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductCard;

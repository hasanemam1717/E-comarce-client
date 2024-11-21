
import { FaLaptop, FaTshirt, FaMobileAlt } from "react-icons/fa";

const CategoryCard = () => {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      description: "Explore the latest gadgets and tech accessories.",
      icon: <FaLaptop size={50} className="text-blue-500" />,
    },
    {
      id: 2,
      name: "Clothing",
      description: "Stylish and comfortable apparel for every season.",
      icon: <FaTshirt size={50} className="text-green-500" />,
    },
    {
      id: 3,
      name: "Mobile Phones",
      description: "Browse the newest smartphones and accessories.",
      icon: <FaMobileAlt size={50} className="text-purple-500" />,
    },
  ];

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-8 lg:px-16">
     
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4">{category.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">
              {category.name}
            </h3>
            <p className="text-gray-600 mt-2 text-sm">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;

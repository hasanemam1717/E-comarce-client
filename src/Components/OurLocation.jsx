import { CiLocationOn } from "react-icons/ci";
import { MdOutlineShareLocation } from "react-icons/md";


const OurLocation = () => {
    const categories = [
        {
          id: 1,
          name: "Electronics",
          description: "Khulna,Zila School,road.",
          icon: <MdOutlineShareLocation size={50} className="text-blue-500" />,
        },
        {
          id: 2,
          name: "Clothing",
          description: "Bonani,Dhaka,Bangladesh",
          icon: <CiLocationOn  size={50} className="text-orange-600"/>,
        },
        {
          id: 3,
          name: "Mobile Phones",
          description: "Jomuna future park,Dhaka,Bangladesh",
          icon: <MdOutlineShareLocation size={50} className="text-blue-500" />,
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

export default OurLocation;
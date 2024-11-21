import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";


/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  const { title, imageURL, inStock, price, description ,_id} = product;
  const { user } = useAuth();
  const navigate = useNavigate()
  const location = useLocation()
  const axiouSecure = useAxiosSecure()
 

  console.log( user?.email);
  const handleAddToCart = product =>{
    if(user && user?.email){
      console.log("email ase",product);
      const cartItem = {
        menuId:_id,
        email:user?.email,
        title,
        imageURL,
        inStock,
        price,
        description
      }
      axiouSecure.post('/carts' ,cartItem)
      .then(res =>{
        if(res.data.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${title} added to the card`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    }
    else{
      Swal.fire({
        title: "You are not logged in!",
        text: "Please log in to the add to the card",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,logIn"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/logIn',{state:{from:location}})
        }
      });
    }
  }
  return (
    <div className="container mx-auto p-4 lg:p-8 ">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105">
        <div className="relative">
          <img src={imageURL} className="w-full h-80 object-cover" />
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            {
             inStock === true? "Available" :"Stock Out"
            }
          </div>
          <div className="absolute bottom-2 right-2 bg-yellow-400 text-gray-900 text-sm px-2 py-1 rounded flex items-center">
            ⭐ 4.8 / 5
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 truncate">{title}</h2>
          <p className="mt-2 text-gray-600 text-sm">{description}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl font-bold text-blue-600">${price}</span>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

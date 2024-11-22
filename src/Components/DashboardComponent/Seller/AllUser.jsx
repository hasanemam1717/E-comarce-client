import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { GrUserAdmin } from "react-icons/gr";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  const handleMakeAdmin = (id) => {
    axiosSecure.patch(`/users/admin/${id}`)
    .then(res =>{
      if(res.data?.modifiedCount > 0){
        refetch()
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User is added  admin successfully",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          console.log(res.data);
          if (res.data?.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your user has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <table className="w-full table  bg-stone-100">
        {/* row num 1 */}
        <tr className="hover  h-10  items-center border-t border-2 border-orange-600 shadow-md rounded ">
          <th>Name</th>
          <th>Email</th>
          <th>MakeAdmin</th>
          <th>Delete</th>
        </tr>
        {users.map((user) => (
          
          <tr
            key={user._id}
            className="hover  h-10  items-center border-t border-2 border-orange-300 shadow-md rounded "
          >
            <td className="">{user?.name}</td>
            <td>{user?.email}</td>
            <td>
             {
              user.role === 'admin' ?'Admin' : <button className="bg-orange-500 flex items-center justify-center rounded text-white w-8 lg:w-10 lg:h-10" onClick={()=>handleMakeAdmin(user._id)}>
              <GrUserAdmin />
            </button>
             }
            </td>
            <td>
              <button className="bg-red-500 flex items-center justify-center rounded text-white w-8 lg:w-10 lg:h-10" onClick={() => handleDelete(user._id)}>
                <AiOutlineDelete size={24} />
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default AllUser;

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import UserTable from "../UserTable";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });
  return (
    <div>
      <table className="w-full table  bg-stone-100">
        {/* row num 1 */}
        <tr className="hover p-5 h-10  items-center border-t border-2 border-orange-600 shadow-md rounded ">
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Outhers</th>
        </tr>
        {users.map((user) => (
          <UserTable key={user._id} user={user}></UserTable>
        ))}
      </table>
    </div>
  );
};

export default AllUser;

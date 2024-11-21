/* eslint-disable react/prop-types */

const UserTable = ({ user }) => {
  return <tr className="hover p-5 h-10  items-center border-t border-2 border-orange-300 shadow-md rounded ">
      <td className="">
        {user?.name}
      </td>
      <td>{user?.email}</td>
      <td>Admin</td>
      <td>button</td>
    </tr>
};

export default UserTable;

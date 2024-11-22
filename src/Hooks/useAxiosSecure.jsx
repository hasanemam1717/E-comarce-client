import axios from "axios";

 const axiosSecure = axios.create({
    baseURL:"https://e-comarce-server-five.vercel.app"
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;
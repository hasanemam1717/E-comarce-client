import { useContext } from 'react';
import { AuthContext } from '../AuthProvidar/AuthProvidar';

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth;
};

export default useAuth;
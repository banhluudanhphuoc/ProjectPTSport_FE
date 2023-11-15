import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // Import thư viện js-cookie
const AuthContextAdmin = createContext();

export function AuthProviderAdmin({ children }) {
    const [isLoggedInAdmin, setIsLoggedInAdmin] = useState(false);

    // Check the presence of the 'adminToken' cookie to determine admin authentication
    useEffect(() => {
        const adminToken = Cookies.get('adminToken');
        if (adminToken) {
            // If the 'adminToken' cookie exists, consider the admin as logged in
            setIsLoggedInAdmin(true);
        }
    }, []);

    return (
        <AuthContextAdmin.Provider value={{ isLoggedInAdmin, setIsLoggedInAdmin }}>
            {children}
        </AuthContextAdmin.Provider>
    );
}

export function useAuthAdmin() {
    return useContext(AuthContextAdmin);
}

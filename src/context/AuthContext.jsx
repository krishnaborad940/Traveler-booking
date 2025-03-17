import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    let [token, settoken] = useState(null);

    const login = (token) => {
        settoken(token);
    };

    const logout = () => {
        settoken(null);
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (pin: string) => boolean;
    logout: () => void;
    changePin: (oldPin: string, newPin: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Initialize PIN if not exists
    useEffect(() => {
        if (!localStorage.getItem('admin_pin')) {
            localStorage.setItem('admin_pin', '1234');
        }
    }, []);

    const login = (pin: string) => {
        const storedPin = localStorage.getItem('admin_pin');
        if (pin === storedPin) {
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    const changePin = (oldPin: string, newPin: string) => {
        const storedPin = localStorage.getItem('admin_pin');
        if (oldPin === storedPin) {
            localStorage.setItem('admin_pin', newPin);
            return true;
        }
        return false;
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, changePin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

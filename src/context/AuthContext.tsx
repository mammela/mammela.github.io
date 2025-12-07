import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    hasPasskey: boolean;
    login: (pin: string) => boolean;
    logout: () => void;
    changePin: (oldPin: string, newPin: string) => boolean;
    registerPasskey: () => Promise<boolean>;
    loginWithPasskey: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helpers for Base64URL encoding/decoding
const base64URLToBuffer = (base64URL: string): Uint8Array => {
    const base64 = base64URL.replace(/-/g, '+').replace(/_/g, '/');
    const padLen = (4 - (base64.length % 4)) % 4;
    const padded = base64 + '='.repeat(padLen);
    const binary = atob(padded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [hasPasskey, setHasPasskey] = useState(false);

    // Initialize PIN and check for passkey
    useEffect(() => {
        if (!localStorage.getItem('admin_pin')) {
            localStorage.setItem('admin_pin', '1234');
        }
        if (localStorage.getItem('admin_passkey_id')) {
            setHasPasskey(true);
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

    const registerPasskey = async () => {
        if (!window.PublicKeyCredential) return false;

        try {
            const challenge = new Uint8Array(32);
            window.crypto.getRandomValues(challenge);

            const credential = await navigator.credentials.create({
                publicKey: {
                    challenge: challenge,
                    rp: { name: "Basic Electric Admin", id: window.location.hostname },
                    user: {
                        id: new Uint8Array(16), // Random user ID
                        name: "admin@basicelectric.fi",
                        displayName: "Admin User"
                    },
                    pubKeyCredParams: [{ alg: -7, type: "public-key" }, { alg: -257, type: "public-key" }],
                    authenticatorSelection: { authenticatorAttachment: "platform", userVerification: "required" },
                    timeout: 60000,
                    attestation: "none"
                }
            }) as PublicKeyCredential;

            if (credential) {
                localStorage.setItem('admin_passkey_id', credential.id);
                setHasPasskey(true);
                return true;
            }
        } catch (e) {
            console.error("Passkey registration failed", e);
        }
        return false;
    };

    const loginWithPasskey = async () => {
        const credentialId = localStorage.getItem('admin_passkey_id');
        if (!credentialId || !window.PublicKeyCredential) return false;

        try {
            const challenge = new Uint8Array(32);
            window.crypto.getRandomValues(challenge);

            const credential = await navigator.credentials.get({
                publicKey: {
                    challenge: challenge,
                    allowCredentials: [{
                        id: base64URLToBuffer(credentialId) as BufferSource,
                        type: 'public-key',
                        transports: ['internal']
                    }],
                    userVerification: 'required',
                    timeout: 60000
                }
            });

            if (credential) {
                setIsAuthenticated(true);
                return true;
            }
        } catch (e) {
            console.error("Passkey login failed", e);
        }
        return false;
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, hasPasskey, login, logout, changePin, registerPasskey, loginWithPasskey }}>
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

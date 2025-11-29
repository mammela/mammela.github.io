import React, { createContext, useContext, useState, useEffect } from 'react';
import type { SiteContent } from '../types';
import { defaultContent } from '../data/defaultContent';

interface ContentContextType {
    content: SiteContent;
    updateContent: (newContent: SiteContent) => void;
    resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [content, setContent] = useState<SiteContent>(defaultContent);

    useEffect(() => {
        const storedContent = localStorage.getItem('site_content');
        if (storedContent) {
            try {
                setContent(JSON.parse(storedContent));
            } catch (e) {
                console.error("Failed to parse stored content", e);
            }
        }
    }, []);

    const updateContent = (newContent: SiteContent) => {
        setContent(newContent);
        localStorage.setItem('site_content', JSON.stringify(newContent));
    };

    const resetContent = () => {
        setContent(defaultContent);
        localStorage.setItem('site_content', JSON.stringify(defaultContent));
    };

    return (
        <ContentContext.Provider value={{ content, updateContent, resetContent }}>
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => {
    const context = useContext(ContentContext);
    if (context === undefined) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
};

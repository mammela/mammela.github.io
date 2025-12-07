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
                const parsed = JSON.parse(storedContent);
                // Merge with default content to ensure new fields are present
                setContent({
                    ...defaultContent,
                    ...parsed,
                    sections: {
                        ...defaultContent.sections,
                        ...(parsed.sections || {})
                    },
                    subsites: {
                        ev: { ...defaultContent.subsites.ev, ...(parsed.subsites?.ev || {}) },
                        electrical: { ...defaultContent.subsites.electrical, ...(parsed.subsites?.electrical || {}) },
                        heatPumps: { ...defaultContent.subsites.heatPumps, ...(parsed.subsites?.heatPumps || {}) },
                        automation: { ...defaultContent.subsites.automation, ...(parsed.subsites?.automation || {}) },
                        professionals: { ...defaultContent.subsites.professionals, ...(parsed.subsites?.professionals || {}) },
                    }
                });
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

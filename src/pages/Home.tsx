import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { useContent } from '../context/ContentContext';

const Home: React.FC = () => {
    const { content } = useContent();

    return (
        <>
            <Header />
            <Hero />
            <Section
                data={content.sections.ev}
                imageSrc="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            />
            <Section
                data={content.sections.ac}
                imageSrc="https://images.unsplash.com/photo-1614631446501-abcf76949734?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                reversed
            />
            <Section
                data={content.sections.smartHome}
                imageSrc="https://images.unsplash.com/photo-1558002038-1091a166111c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            />
            <ContactForm />
            <Footer />
        </>
    );
};

export default Home;

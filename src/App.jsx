import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Manufacturing from './components/Manufacturing';
import Gallery from './components/Gallery';
import Logos from './components/Logos';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

    // Smooth scroll behavior for anchor links
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <div className="font-body text-gray-800 antialiased overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />
                <Logos />
                <About />
                <Manufacturing />
                <Gallery />
                <Location />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App;

import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Tech from './Tech/Tech';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Layout = () => {
    return (
        <div
            style={{
                position: 'relative',
                height: '100vh',
                width: '100vw',
                backgroundImage: 'url(/background.gif)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: 0,
            }}
        >
            <div style={{ position: 'relative', zIndex: 1 }}>
                <Hero />
                <About />
                <Tech />
                <Projects />
                <Experience />
                <Contact />
            </div>
        </div>
    );
};

export default Layout;

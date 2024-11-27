import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Tech from './Tech/Tech';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact';

const Layout = () => {
    return (
        <div
            style={{
                position: 'relative',
                height: '100vh',
                width: '100vw',
                backgroundImage: 'url(/background.gif)', // Update path as needed
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: 0,
            }}
        >
            <div style={{ position: 'relative', zIndex: 1 }}>
                <Hero />
                {/* <Header /> */}
                <About />
                <Tech />
                <Experience />
                <Contact />
                
            </div>
        </div>
    );
};

export default Layout;

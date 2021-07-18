import React from 'react'
import Hero from './Hero/Hero'
import Header from './Header/Header'
import About from './About/About'
import Experience from './Experience/Experience'
import Contact from './Contact/Contact'

const Layout = (props) => {
    return (
        <div>
            <Hero />
            <Header />
            <About />
            <Experience />
            <Contact />
        </div>
    )
}

export default Layout
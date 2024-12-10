import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skillss from './components/Skillss'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Skillss />
            <Portfolio />
            <Experience />
            <Contact />
            <Footer />
        </>
    )
}

export default App
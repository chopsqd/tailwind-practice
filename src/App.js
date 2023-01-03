import React from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Features />
            <Testimonials />
            <Cta />
            <Footer />
        </div>
    );
};

export default App;
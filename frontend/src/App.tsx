import React from "react";
import "./App.css";
import logo from "./logo.svg";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import WhoWeAre from "./components/layout/WhoWeAre";
import FeaturedBootcamps from "./components/layout/FeaturedBootcamps";

function App() {
    return (
        <div className="App max-w-4xl mx-auto">
            <header>
                <Navbar />
            </header>
            <main>
                <Hero />
                <WhoWeAre />
                <FeaturedBootcamps />
            </main>
        </div>
    );
}

export default App;

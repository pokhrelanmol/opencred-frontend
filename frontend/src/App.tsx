import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
    return (
        <div className="App max-w-4xl mx-auto">
            <header>
                <Navbar />
            </header>
            <main>
                <Hero />
            </main>
        </div>
    );
}

export default App;

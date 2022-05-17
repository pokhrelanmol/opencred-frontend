import React from "react";
import "./App.css";
import logo from "./logo.svg";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Homepage/Hero";
import WhoWeAre from "./components/layout/Homepage/WhoWeAre";
import FeaturedBootcamps from "./components/layout/Homepage/FeaturedBootcamps";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BootcampDetails from "./components/layout/bootcampsDetailsPage/BootcampDetails";

function App() {
    return (
        <div className="App max-w-4xl mx-auto">
            <Router>
                <header>
                    <Navbar />
                </header>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <main>
                                    <Hero />
                                    <WhoWeAre />
                                    <FeaturedBootcamps />
                                    {/* <BootcampDetails /> */}
                                </main>
                            </>
                        }
                    />
                    <Route path="/bootcamp/:id" element={<BootcampDetails />} />
                    <Route path="/bootcamps" />
                    <Route path="/create-bootcamp" />
                    <Route path="/graduate-students" />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

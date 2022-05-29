import React from "react";
import "./App.css";
import logo from "./logo.svg";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Homepage/Hero";
import WhoWeAre from "./components/layout/Homepage/WhoWeAre";
import FeaturedBootcamps from "./components/layout/Homepage/FeaturedBootcamps";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BootcampDetails from "./components/layout/bootcampsDetailsPage/BootcampDetails";
import { PaginationProvider } from "./context/PaginationContext";
import Footer from "./components/layout/Footer";
import ReviewForm from "./components/layout/ReviewForm";
import CreateBootcamp from "./components/layout/CreateBootcamp";
import CreateCourse from "./components/layout/CreateCourse";
import GraduateStudent from "./components/layout/GraduateStudent";

function App() {
    return (
        <div className="App max-w-4xl mx-auto font-poppins flex flex-col justify-between min-h-screen">
            <Router>
                <header>
                    <Navbar />
                </header>
                <main className="flex-grow">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <main>
                                        <Hero />
                                        <WhoWeAre />
                                        <FeaturedBootcamps />
                                    </main>
                                </>
                            }
                        />
                        <Route
                            path="/bootcamp/:id"
                            element={
                                <PaginationProvider>
                                    <BootcampDetails />
                                </PaginationProvider>
                            }
                        />
                        <Route
                            path="/bootcamp/:id/review"
                            element={<ReviewForm />}
                        />
                        <Route
                            path="/create-bootcamp"
                            element={<CreateBootcamp />}
                        />
                        <Route
                            path="/create-course"
                            element={<CreateCourse />}
                        />
                        <Route
                            path="/graduate-student"
                            element={<GraduateStudent />}
                        />
                    </Routes>
                </main>
                <footer>
                    <Footer />
                </footer>
            </Router>
        </div>
    );
}

export default App;

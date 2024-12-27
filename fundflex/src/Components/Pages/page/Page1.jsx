import React from "react";
import Footer from "./Footer";
import MainContent from "./Main-content";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Pricing from "./Pricing";

function Home() {
  return (
    <>
      <Navbar />
      <MainContent />
      <Footer />
    </>
  );
}

function Page1() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}

export default Page1;

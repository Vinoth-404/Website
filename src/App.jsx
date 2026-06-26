import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Solutions from "./sections/Solutions";
import Services from "./sections/Services";
import WhyChooseUs from "./sections/WhyChooseUs";
import Process from "./sections/Process";
import Technology from "./sections/Technology";
import CTA from "./sections/CTA";

import About from "./sections/About";
import Contact from "./sections/Contact";

import EducationERPSolutions from "./pages/EducationERPSolutions";
import RetailSolutions from "./pages/RetailSolutions";
import AnalyticsSolutions from "./pages/AnalyticsSolutions";
import DigitalPlatformSolutions from "./pages/DigitalPlatformSolutions";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Solutions />
      <Services />
      <WhyChooseUs />
      <Process />
      <Technology />
      <CTA />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Solution Pages */}
        <Route
          path="/solutions/education-erp"
          element={<EducationERPSolutions />}
        />

        <Route
          path="/solutions/retail"
          element={<RetailSolutions />}
        />

        <Route
          path="/solutions/analytics"
          element={<AnalyticsSolutions />}
        />

        <Route
          path="/solutions/digital-platform"
          element={<DigitalPlatformSolutions />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
import "../styles/about.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "./CTA";
import Expertise from "./Expertise";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="about-hero">

        <div className="about-overlay"></div>

        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h2
           className="about-tag">
            About Us
          </h2>

          <h1>
            Building Technology
            <br />
            That Powers Businesses
          </h1>

          <p >
            CrackOne Technologies delivers innovative software solutions
            that help businesses automate processes, improve efficiency,
            and accelerate digital transformation.
          </p>

        </motion.div>

      </section>

      {/* Company */}

      <section className="company-section">

        <div className="company-container">

          <motion.div
            className="company-image"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <img
              src="/images/about/crackone-brand.png"
              alt="CrackOne"
            />

          </motion.div>

          <motion.div
            className="company-content"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="section-tag">
              Who We Are
            </p>

            <h2>
              Creating Digital Solutions
              That Make Businesses Better
            </h2>

            <p >
              CrackOne Technologies is a software development company
              specializing in custom software, ERP systems, web
              applications, AI-powered solutions, analytics platforms,
              and digital marketing.
            </p>

            <p>
              Our mission is to deliver scalable, secure, and innovative
              technology solutions that enable organizations to grow,
              streamline operations, and embrace digital transformation.
            </p>

          </motion.div>

        </div>

      </section>

      {/* Mission & Vision */}

      <section className="mission-section">

        <div className="mission-grid">

          <motion.div
            className="mission-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <Target size={40} />

            <h3>Our Mission</h3>

            <p>
              To empower businesses with innovative software solutions
              that improve productivity, efficiency and sustainable
              business growth.
            </p>

          </motion.div>

          <motion.div
            className="mission-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >

            <Eye size={40} />

            <h3>Our Vision</h3>

            <p>
              To become a trusted global technology partner delivering
              reliable, scalable and future-ready digital solutions.
            </p>

          </motion.div>

        </div>

      </section>

      {/* Expertise */}

      <Expertise />

      {/* Statistics */}

      <section className="stats-section">

        <div className="stats-grid">

          <div className="stat-card">
            <h2>25+</h2>
            <p>Projects</p>
          </div>

          <div className="stat-card">
            <h2>15+</h2>
            <p>Technologies</p>
          </div>

          <div className="stat-card">
            <h2>100%</h2>
            <p>Custom Solutions</p>
          </div>

          <div className="stat-card">
            <h2>24/7</h2>
            <p>Support</p>
          </div>

        </div>

      </section>

      <CTA />

      <Footer />
    </>
  );
}
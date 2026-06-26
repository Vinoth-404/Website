import "../styles/cta.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="cta-section">

      <motion.div
        className="cta-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >

        <p className="cta-tag">
          Let's Work Together
        </p>

        <h2>
          Ready to Build
          <br />
          Your Next Solution?
        </h2>

        <p className="cta-description">
         From concept to deployment, we build custom software solutions that help businesses innovate, automate, and grow with confidence.
        </p>

        <div className="cta-buttons">

          <Link to="/contact" className="primary-btn">
            Make It Possible
          </Link>

          

        </div>

      </motion.div>

    </section>
  );
}
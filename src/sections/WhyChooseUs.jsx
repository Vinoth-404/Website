import "../styles/why-choose.css";
import { motion } from "framer-motion";

const features = [
  {
    title: "Custom-Built Solutions",
    desc: "Solutions designed specifically around your business goals and workflows."
  },
  {
    title: "Business-First Approach",
    desc: "We focus on solving real business challenges through technology."
  },
  {
    title: "Scalable & Future-Ready",
    desc: "Built to grow with your organization and adapt to future needs."
  },
  {
    title: "Fast & Agile Development",
    desc: "Efficient development process ensuring faster delivery and quality."
  },
  {
    title: "End-to-End Support",
    desc: "From planning to deployment and maintenance, we support every stage."
  },
  {
    title: "Affordable Innovation",
    desc: "Enterprise-grade solutions delivered with cost-effective strategies."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose" id="why-choose">

      <div className="why-container">

        <motion.p
          className="why-choose-tag"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why Choose CrackOne
        </motion.p>

        <motion.h2
          className="why-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Building Technology,
          <br />
          Delivering Results
        </motion.h2>

        <motion.div
          className="why-divider"
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

      </div>

      <div className="why-slider-container">

        {/* ================= DESKTOP ================= */}

        <div className="desktop-slider">

          {/* Row 1 */}
          <div className="slider-wrapper">

            <motion.div
              className="slider-track-right"
              animate={{ x: [0, 100, 0] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {features.slice(0, 3).map((item, index) => (
                <div className="why-card" key={index}>
                  <div className="why-icon">✓</div>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>

                </div>
              ))}
            </motion.div>

          </div>

          {/* Row 2 */}
          <div className="slider-wrapper">

            <motion.div
              className="slider-track-left"
              animate={{ x: [0, -100, 0] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {features.slice(3, 6).map((item, index) => (
                <div className="why-card" key={index}>
                  <div className="why-icon">✓</div>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>

                </div>
              ))}
            </motion.div>

          </div>

        </div>

        {/* ================= MOBILE ================= */}

        <div className="mobile-slider">

          <div className="mobile-track">

            {[...features, ...features].map((item, index) => (

              <div className="why-card" key={index}>

                <div className="why-icon">✓</div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
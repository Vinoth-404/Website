import "../styles/solutions.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Education Solutions",
    description: "Digital platforms for colleges, schools, training institutes, attendance, academics and administration.",
    image: "/images/solutions/education.png",
    link: "/solutions/education-erp",
  },
  {
    title: "Retail Solutions",
    description: "Smart retail management solutions with billing, inventory tracking, purchase management, sales analytics and real-time reporting to improve business efficiency.",
    image: "/images/solutions/retail.png",
    link: "/solutions/retail",
  },
  {
    title: "Analytics Solutions",
    description: "Advanced business intelligence and analytics platforms that transform raw data into actionable insights, dashboards and performance-driven decision making.",
    image: "/images/solutions/analytics.png",
    link: "/solutions/analytics",
  },
  {
    title: "Digital Platform Solutions",
    description: "Scalable web applications, customer portals, SaaS platforms and digital ecosystems designed to enhance user engagement and accelerate business growth.",
    image: "/images/solutions/digital-platform.png",
    link: "/solutions/digital-platform",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="solutions">
      <div className="solutions-container">

        <p className="section-tag">Solutions</p>

        <h2 className="solutions-title">
          Solutions Built For
          <br />
          Modern Businesses
        </h2>

        {solutions.map((item, index) => (
          <motion.div
            key={index}
            className={`solution-row ${index % 2 !== 0 ? "reverse" : ""}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="solution-content">

              <span className="solution-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <Link
                to={item.link}
                className="learn-btn"
              >
                Learn More →
              </Link>

            </div>

            <div className="solution-image">
              <img
                src={item.image}
                alt={item.title}
              />
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}
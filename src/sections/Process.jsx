import "../styles/process.css";
import { motion } from "framer-motion";

const process = [
  {
    no: "01",
    title: "Requirement Analysis",
    desc: "Understand business goals, workflows and project requirements."
  },
  {
    no: "02",
    title: "UI / UX Design",
    desc: "Design intuitive, engaging and user-friendly digital experiences."
  },
  {
    no: "03",
    title: "Development",
    desc: "Build secure, scalable and high-performance software solutions."
  },
  {
    no: "04",
    title: "Testing",
    desc: "Perform rigorous quality assurance to ensure reliability and performance."
  },
  {
    no: "05",
    title: "Deployment",
    desc: "Deploy applications smoothly with minimal downtime and maximum stability."
  },
  {
    no: "06",
    title: "Support",
    desc: "Provide continuous maintenance, monitoring and future enhancements."
  }
];

export default function Process() {
  return (
    <section id="process" className="process-section">

      <div className="process-heading">

        <p className="process-tag">
          Delivery Method
        </p>

        <div className="process-header">
          <h2>Structured Development Journey</h2>

         
        </div>

      </div>

      <div className="timeline">

        <div className="timeline-line"></div>

        {process.map((item, index) => (

          <motion.div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15
            }}
          >

            <div className="timeline-card">

              <div className="timeline-number">
                {item.no}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
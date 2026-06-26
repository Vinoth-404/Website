import "../styles/technology.css";
import { motion } from "framer-motion";

/* Technology Icons */
import html from "../assets/technologies/html5.png";
import css from "../assets/technologies/css.png";
import javascript from "../assets/technologies/javascript.png";
import typescript from "../assets/technologies/typescript.png";
import react from "../assets/technologies/react.png";
import nextjs from "../assets/technologies/next.js.png";
import node from "../assets/technologies/node.js.png";
import java from "../assets/technologies/java.png";
import python from "../assets/technologies/python.png";
import sql from "../assets/technologies/sql.png";
import postgresql from "../assets/technologies/postgresql.png";
import docker from "../assets/technologies/docker.png";
import aws from "../assets/technologies/aws.png";
import azure from "../assets/technologies/azure.png";
import github from "../assets/technologies/github.png";
import vscode from "../assets/technologies/vscode.png";
import vite from "../assets/technologies/vite.png";
import bootstrap from "../assets/technologies/bootstrap.png";
import tailwind from "../assets/technologies/tailwind.css.png";
import figma from "../assets/technologies/figma.png";
import django from "../assets/technologies/django.png";
import cpp from "../assets/technologies/c++.png";
import bash from "../assets/technologies/bash.png";
import power from "../assets/technologies/microsoft_power.png";
import database from "../assets/technologies/database.png";


const row1 = [
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Next.js", icon: nextjs },
  { name: "Vite", icon: vite },
  { name: "GitHub", icon: github },
];

const row2 = [
  { name: "React.js", icon: react },
  { name: "Java", icon: java },
  { name: "Python", icon: python },
  { name: "Django", icon: django },
  { name: "C++", icon: cpp },
  { name: "TypeScript", icon: typescript },
  { name: "SQL", icon: sql },
  { name: "PostgreSQL", icon: postgresql },
];

const row3 = [
  { name: "AWS", icon: aws },
  { name: "Azure", icon: azure },
  { name: "Docker", icon: docker },
  { name: "VS Code", icon: vscode },
  { name: "Figma", icon: figma },
  { name: "MS Power", icon: power },
  { name: "Bash", icon: bash },
  { name: "Database", icon: database },
];

function MarqueeRow({ items, reverse = false }) {
  return (
    <div className="marquee">

      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>

        {[...items, ...items].map((tech, index) => (

          <div className="tech-card" key={index}>

            <img src={tech.icon} alt={tech.name} />

            <span>{tech.name}</span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default function Technology() {
  return (
    <section className="technology-section">

      <div className="technology-container">

        <motion.div
          className="technology-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="technology-tag">
            Technology Stack
          </p>

          <h2>
            Building with
            <br />
            Modern Technologies
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <MarqueeRow items={row1} />

          <MarqueeRow items={row2} reverse />

          <MarqueeRow items={row3} />
        </motion.div>

      </div>

    </section>
  );
}
import "../styles/services.css";
import {
  Globe,
  Smartphone,
  Settings,
  Bot,
  Cloud,
  GraduationCap,
  Megaphone
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Globe size={40} />,
      title: "Web Development",
      desc: "Modern, responsive, and scalable websites tailored for businesses and startups.",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile applications with seamless user experiences.",
    },
    {
      icon: <Settings size={40} />,
      title: "Custom Software Solutions",
      desc: "ERP systems, management platforms, and business applications built for your workflow.",
    },
    {
      icon: <Bot size={40} />,
      title: "AI & Automation",
      desc: "Intelligent automation solutions that improve productivity and business efficiency.",
    },
    {
      icon: <Cloud size={40} />,
      title: "Cloud & DevOps",
      desc: "Secure cloud deployment, infrastructure management, and CI/CD solutions.",
    },
    {
      icon: <Megaphone size={40} />,
      title: "Digital Marketing",
      desc: "Data-driven digital marketing solutions including SEO, social media management, content marketing, and online brand growth.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <p className="service-tag">Services</p>
        <div className="services-header">
          <h2>Technology Solutions That Drive Growth</h2>
          </div>
          
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      
    </section>
  );
}
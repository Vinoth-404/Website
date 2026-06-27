import "../styles/case-study.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
  const navigate = useNavigate();
export default function EducationERPSolutions() {
  return (
    <div className="case-study">

      {/* Hero Section */}
      <motion.section
        className="case-hero"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="case-hero-content">
          <h1>Education ERP Solutions</h1>

          <p>
            Streamline admissions, academics, attendance,
            examinations, fees and institutional operations
            through a unified ERP platform.
          </p>
  <button
  className="education-talk-btn"
  onClick={() => navigate("/contact")}
>
  Talk to an Expert
</button>
        </div>
      </motion.section>

      {/* Overview */}
      <section className="case-section">

        <h2>Overview</h2>

        <p>
          CrackOne develops scalable Education ERP solutions
          for colleges, schools, training institutes and
          educational organizations to simplify operations,
          improve efficiency and centralize data management.
        </p>

      </section>

      {/* Dashboard Preview - Moved Below Overview */}
      <section className="dashboard-preview">
        
        <img
          src="/images/work/college-erp-dashboard.png"
          alt="Education ERP Dashboard"
        />
      </section>

      {/* Business Challenges */}
      <section className="case-section">

        <h2>Business Challenges</h2>

        <div className="challenge-grid">

          <div className="challenge-card">
            <h3>Manual Administration</h3>
            <p>
              Time-consuming paperwork and repetitive tasks.
            </p>
          </div>

          <div className="challenge-card">
            <h3>Attendance Tracking</h3>
            <p>
              Difficulty maintaining accurate attendance
              records.
            </p>
          </div>

          <div className="challenge-card">
            <h3>Fee Management</h3>
            <p>
              Complex fee collection and payment monitoring.
            </p>
          </div>

          <div className="challenge-card">
            <h3>Academic Reporting</h3>
            <p>
              Lack of centralized reporting and analytics.
            </p>
          </div>

        </div>

      </section>

      {/* Why CrackOne */}
      <section className="case-section">

        <h2>Why CrackOne</h2>

        <p>
          We build customized ERP solutions tailored to each
          institution's workflow, ensuring scalability,
          security, usability and long-term support.
        </p>

      </section>

      {/* Key Modules */}
      <section className="case-section">

        <h2>Key Modules</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>Student Management</h3>
          </div>

          <div className="feature-card">
            <h3>Attendance</h3>
          </div>

          <div className="feature-card">
            <h3>Fee Management</h3>
          </div>

          <div className="feature-card">
            <h3>Examinations</h3>
          </div>

          <div className="feature-card">
            <h3>Staff Management</h3>
          </div>

          <div className="feature-card">
            <h3>Library</h3>
          </div>

          <div className="feature-card">
            <h3>Reports</h3>
          </div>

          <div className="feature-card">
            <h3>Analytics</h3>
          </div>

        </div>

      </section>

      {/* Technology Stack */}
      {/* Who Can Use This ERP */}
<section className="case-section">

  <h2>Who Can Use This ERP?</h2>

  <p>
    Our Education ERP solution is designed for educational
    institutions of all sizes, helping them streamline
    operations, improve productivity and centralize
    management processes.
  </p>

  <div className="erp-users-wrapper">

    <div className="erp-users-left">

      <div className="erp-user-item">
        
        <h3>Schools</h3>
        <span className="erp-number">1</span>
      </div>

      <div className="erp-user-item">
       
        <h3>Colleges</h3>
         <span className="erp-number">2</span>
      </div>

      <div className="erp-user-item">
        
        <h3>Coaching Centers</h3>
        <span className="erp-number">3</span>
      </div>

    </div>

    <div className="erp-center-image">
      <img
        src="/images/solutions/corporate-building.png"
        alt="Education ERP"
      />
    </div>

    <div className="erp-users-right">

      <div className="erp-user-item">
        <span className="erp-number">4</span>
        <h3>Universities</h3>
        
      </div>

      <div className="erp-user-item">
         <span className="erp-number">5</span>
        <h3>Training Institutes</h3>
       
      </div>

      <div className="erp-user-item">
        <span className="erp-number">6</span>
        <h3>Educational Organizations</h3>
        
      </div>

    </div>

  </div>

</section>

{/* Implementation Process */}
<section className="case-section">

  <h2>Implementation Process</h2>

  <div className="process-grid">

    <div className="process-card">
      
      <h3>Requirement Analysis</h3>
      <p>Understand institution workflows and operational needs.</p>
    </div>

    <div className="process-card">
      
      <h3>System Design</h3>
      <p>Design scalable ERP architecture and workflows.</p>
    </div>

    <div className="process-card">
     
      <h3>Development</h3>
      <p>Build modules for academics, finance and administration.</p>
    </div>

    <div className="process-card">
     
      <h3>Testing</h3>
      <p>Validate performance, security and reliability.</p>
    </div>

    <div className="process-card">
      
      <h3>Deployment</h3>
      <p>Deploy ERP and migrate institutional data.</p>
    </div>

    <div className="process-card">
      
      <h3>Support</h3>
      <p>Continuous maintenance and future enhancements.</p>
    </div>

  </div>

</section>
      {/* Business Benefits */}
      <section className="case-section">

        <h2>Business Benefits</h2>

        <div className="benefits-grid">

          <div className="benefit-card">
            Centralized Data Management
          </div>

          <div className="benefit-card">
            Improved Operational Efficiency
          </div>

          <div className="benefit-card">
            Real-Time Reporting
          </div>

          <div className="benefit-card">
            Better Student Experience
          </div>

          <div className="benefit-card">
            Secure Information Management
          </div>

          <div className="benefit-card">
            Scalable Growth
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cta-section">

        <h2>Need a Similar Solution?</h2>

        <p>
          Let's discuss how CrackOne can help transform your
          institution with a customized ERP solution.
        </p>

        <button
  className="education-talk-btn"
  onClick={() => navigate("/contact")}
>
  Talk to an Expert
</button>

      </section>

    </div>
  );
}
import "../styles/digital-platform.css";
import { motion } from "framer-motion";

export default function DigitalPlatformSolutions() {
  return (
    <div className="digital-page">

      {/* Hero */}
      <motion.section
        className="digital-hero"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: `
            linear-gradient(
              rgba(15,23,42,.75),
              rgba(15,23,42,.75)
            ),
            url("/images/hero/DigitalPlatformSolutions.png")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="digital-hero-content">
          <h1>Digital Platform Solutions</h1>

          <p>
            Build scalable digital platforms that streamline
            operations, enhance customer experiences and
            accelerate business growth.
          </p>

          <button
  className="platform-talk-btn"
  onClick={() => window.location.href = "/contact"}
>
  Talk to an Expert
</button>
        </div>
      </motion.section>

      {/* Overview */}
      <section className="digital-section">
        <h2>Overview</h2>

        <p>
          CrackOne develops enterprise-grade digital platforms
          including customer portals, business applications,
          cloud solutions and workflow automation systems.
        </p>
      </section>

      {/* Preview */}
      <section className="digital-dashboard-preview">
        <img
          src="/images/work/food-delivery.png"
          alt="Digital Platform"
        />
      </section>

      {/* Challenges */}
      <section className="digital-section">
        <h2>Business Challenges</h2>

        <div className="digital-challenge-grid">

          <div className="digital-challenge-card">
            <h3>Disconnected Systems</h3>
            <p>Business tools operate independently.</p>
          </div>

          <div className="digital-challenge-card">
            <h3>Manual Processes</h3>
            <p>Too many repetitive operational tasks.</p>
          </div>

          <div className="digital-challenge-card">
            <h3>Poor User Experience</h3>
            <p>Customers struggle with outdated platforms.</p>
          </div>

          <div className="digital-challenge-card">
            <h3>Limited Scalability</h3>
            <p>Existing systems cannot support growth.</p>
          </div>

        </div>
      </section>

      {/* Why CrackOne */}
      <section className="digital-section">
        <h2>Why CrackOne</h2>

        <p>
          We build secure, scalable and future-ready digital
          platforms customized to your business requirements.
        </p>
      </section>

      {/* Features */}
      <section className="digital-section">
        <h2>Key Features</h2>

        <div className="digital-feature-grid">

          <div className="digital-feature-card">
            <h3>Web Portals</h3>
          </div>

          <div className="digital-feature-card">
            <h3>Mobile Apps</h3>
          </div>

          <div className="digital-feature-card">
            <h3>Cloud Integration</h3>
          </div>

          <div className="digital-feature-card">
            <h3>Workflow Automation</h3>
          </div>

          <div className="digital-feature-card">
            <h3>User Management</h3>
          </div>

          <div className="digital-feature-card">
            <h3>Real-Time Notifications</h3>
          </div>

          <div className="digital-feature-card">
            <h3>API Integrations</h3>
          </div>

          <div className="digital-feature-card">
            <h3>Advanced Security</h3>
          </div>

        </div>
      </section>

      {/* Users */}
      <section className="digital-section">

        <h2>Who Can Use This Solution?</h2>

        <div className="digital-users-wrapper">

          <div className="digital-users-left">

            <div className="digital-user-item">
              <span className="digital-number">1</span>
              <h3>Startups</h3>
            </div>

            <div className="digital-user-item">
              <span className="digital-number">2</span>
              <h3>SMEs</h3>
            </div>

            <div className="digital-user-item">
              <span className="digital-number">3</span>
              <h3>E-Commerce</h3>
            </div>

          </div>

          <div className="digital-center-image">
            <img
              src="/images/solutions/DigitalCenter.jpg"
              alt="Digital Platform"
            />
          </div>

          <div className="digital-users-right">

            <div className="digital-user-item">
              <span className="digital-number">4</span>
              <h3>Enterprises</h3>
            </div>

            <div className="digital-user-item">
              <span className="digital-number">5</span>
              <h3>Educational Institutions</h3>
            </div>

            <div className="digital-user-item">
              <span className="digital-number">6</span>
              <h3>Service Providers</h3>
            </div>

          </div>

        </div>

      </section>

      {/* Process */}
      <section className="digital-section">

        <h2>Implementation Process</h2>

        <div className="digital-process-grid">

          <div className="digital-process-card">
            <h3>Discovery</h3>
            <p>Understand business requirements.</p>
          </div>

          <div className="digital-process-card">
            <h3>Planning</h3>
            <p>Create solution architecture.</p>
          </div>

          <div className="digital-process-card">
            <h3>Design</h3>
            <p>Build modern UI/UX experiences.</p>
          </div>

          <div className="digital-process-card">
            <h3>Development</h3>
            <p>Develop platform modules.</p>
          </div>

          <div className="digital-process-card">
            <h3>Deployment</h3>
            <p>Launch on cloud infrastructure.</p>
          </div>

          <div className="digital-process-card">
            <h3>Support</h3>
            <p>Continuous monitoring and updates.</p>
          </div>

        </div>

      </section>

      {/* Benefits */}
      <section className="digital-section">

        <h2>Business Benefits</h2>

        <div className="digital-benefits-grid">

          <div className="digital-benefit-card">
            Faster Operations
          </div>

          <div className="digital-benefit-card">
            Better Customer Experience
          </div>

          <div className="digital-benefit-card">
            Increased Productivity
          </div>

          <div className="digital-benefit-card">
            Higher Scalability
          </div>

          <div className="digital-benefit-card">
            Reduced Costs
          </div>

          <div className="digital-benefit-card">
            Business Growth
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="digital-cta-section">

        <h2>Need a Similar Solution?</h2>

        <p>
          Let's discuss how CrackOne can build a custom
          digital platform for your organization.
        </p>
<button
  className="platform-talk-btn"
  onClick={() => window.location.href = "/contact"}
>
  Talk to an Expert
</button>
      </section>

    </div>
  );
}
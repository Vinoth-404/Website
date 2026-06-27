import "../styles/analytics.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function AnalyticsSolutions() {
  const navigate = useNavigate();
  return (
    <div className="analytics-page">

      {/* Hero */}
      <motion.section
        className="analytics-hero"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: `
            linear-gradient(
              rgba(15,23,42,.75),
              rgba(15,23,42,.75)
            ),
            url("/images/hero/analytics-hero.jpeg")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="analytics-hero-content">
          <h1>Business Analytics Solutions</h1>

          <p>
            Transform raw business data into actionable insights
            with real-time dashboards, reporting and analytics.
          </p>
<button
  className="analytics-talk-btn"
  onClick={() => navigate("/contact")}
>
  Talk to an Expert
</button>
        </div>
      </motion.section>

      {/* Overview */}
      <section className="analytics-section
">
        <h2>Overview</h2>

        <p>
          CrackOne develops advanced analytics platforms that help
          businesses monitor KPIs, visualize performance and make
          data-driven decisions through powerful dashboards and
          reporting systems.
        </p>
      </section>

      {/* Dashboard */}
      <section className="analytics-dashboard-preview">
        <img
          src="/images/work/cricket-analyzer.png"
          alt="Analytics Dashboard"
        />
      </section>

      {/* Challenges */}
      <section className="analytics-section">

        <h2>Business Challenges</h2>

        <div className="analytics-challenge-grid">

          <div className="analytics-challenge-card">
            <h3>Scattered Data Sources</h3>
            <p>Business data exists across multiple systems.</p>
          </div>

          <div className="analytics-challenge-card">
            <h3>Lack of Visibility</h3>
            <p>Difficulty tracking KPIs and performance metrics.</p>
          </div>

          <div className="analytics-challenge-card">
            <h3>Manual Reporting</h3>
            <p>Time-consuming spreadsheet-based reporting.</p>
          </div>

          <div className="analytics-challenge-card">
            <h3>Slow Decisions</h3>
            <p>Limited access to real-time business insights.</p>
          </div>

        </div>

      </section>

      {/* Why CrackOne */}
      <section className="analytics-section">

        <h2>Why CrackOne</h2>

        <p>
          We build custom analytics platforms with real-time
          dashboards, business intelligence reports and KPI
          monitoring systems tailored to your business goals.
        </p>

      </section>

      {/* Features */}
      <section className="analytics-section">

        <h2>Key Features</h2>

        <div className="analytics-feature-grid">

          <div className="analytics-feature-card">
            <h3>Interactive Dashboards</h3>
          </div>

          <div className="analytics-feature-card">
            <h3>Real-Time Analytics</h3>
          </div>

          <div className="analytics-feature-card">
            <h3>Data Visualization</h3>
          </div>

          <div className="analytics-feature-card">
            <h3>Automated Reports</h3>
          </div>

          <div className="analytics-feature-card">
            <h3>KPI Tracking</h3>
          </div>

          <div className="analytics-feature-card">
            <h3>Forecasting</h3>
          </div>

          <div className="analytics-feature-card">
            <h3>Data Integration</h3>
          </div>

          <div className="analytics-feature-card">
            <h3>Business Intelligence</h3>
          </div>

        </div>

      </section>

      {/* Who Can Use */}
      <section className="analytics-section">

        <h2>Who Can Use This Solution?</h2>

        <div className="analytics-users-wrapper">

          <div className="analytics-users-left">

            <div className="analytics-user-item">
              <span className="analytics-number">1</span>
              <h3>Business Analysts</h3>
            </div>

            <div className="analytics-user-item">
              <span className="analytics-number">2</span>
              <h3>Marketing Teams</h3>
            </div>

            <div className="analytics-user-item">
              <span className="analytics-number">3</span>
              <h3>Sales Teams</h3>
            </div>

          </div>

          <div className="analytics-center-image">
            <img
              src="/images/solutions/analytics.png"
              alt="Analytics"
            />
          </div>

          <div className="analytics-users-right">

            <div className="analytics-user-item">
              <span className="analytics-number">4</span>
              <h3>Executives</h3>
            </div>

            <div className="analytics-user-item">
              <span className="analytics-number">5</span>
              <h3>Data Teams</h3>
            </div>

            <div className="analytics-user-item">
              <span className="analytics-number">6</span>
              <h3>Enterprises</h3>
            </div>

          </div>

        </div>

      </section>

      {/* Process */}
      <section className="analytics-section">

        <h2>Implementation Process</h2>

        <div className="analytics-process-grid">

          <div className="analytics-process-card">
            
            <h3>Requirement Analysis</h3>
            <p>Identify KPIs and reporting needs.</p>
          </div>

          <div className="analytics-process-card">
            
            <h3>Data Collection</h3>
            <p>Connect and consolidate business data.</p>
          </div>

          <div className="analytics-process-card">
            
            <h3>Dashboard Design</h3>
            <p>Create intuitive dashboard layouts.</p>
          </div>

          <div className="analytics-process-card">
            
            <h3>Development</h3>
            <p>Build reporting and analytics modules.</p>
          </div>

          <div className="analytics-process-card">
            
            <h3>Deployment</h3>
            <p>Launch dashboards and reporting tools.</p>
          </div>

          <div className="analytics-process-card">
            
            <h3>Support</h3>
            <p>Continuous optimization and maintenance.</p>
          </div>

        </div>

      </section>

      {/* Benefits */}
      <section className="analytics-section">

        <h2>Business Benefits</h2>

        <div className="analytics-benefits-grid">

          <div className="analytics-benefit-card">
            Better Decision Making
          </div>

          <div className="analytics-benefit-card">
            Real-Time Visibility
          </div>

          <div className="analytics-benefit-card">
            Improved Productivity
          </div>

          <div className="analytics-benefit-card">
            Accurate Forecasting
          </div>

          <div className="analytics-benefit-card">
            Reduced Reporting Time
          </div>

          <div className="analytics-benefit-card">
            Business Growth
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="analytics-cta-section">

        <h2>Need a Similar Solution?</h2>

        <p>
          Let's discuss how CrackOne can build a custom
          analytics platform for your organization.
        </p>
<button
  className="analytics-talk-btn"
  onClick={() => navigate("/contact")}
>
  Talk to an Expert
</button>

      </section>

    </div>
  );
}
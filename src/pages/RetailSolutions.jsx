import "../styles/retail.css";

export default function RetailSolutions() {
  return (
    <div className="retail-page">

      <section className="retail-hero">
        <div className="retail-hero-content">
          <h1>Retail Billing & Inventory Management</h1>

          <p>
  Simplify billing, inventory tracking, sales reporting,
  customer management and business operations through a
  single platform.
</p>
 <button
  className="retail-talk-btn"
  onClick={() => window.location.href = "/contact"}
>
  Talk to an Expert
</button>
        </div>
      </section>

      <section className="retail-section">
        
        
          <h2>Overview</h2>

<p>
CrackOne Retail Billing & Inventory Management System helps retailers
streamline billing, inventory tracking, purchases, sales and customer
management from a single platform. The solution provides real-time stock
visibility, automated reporting and business insights to improve
operational efficiency and profitability.
</p>
        
      </section>

      <section className="retail-section">


  <div className="dashboard-preview">
    <img
      src="/images/work/billing-system-dashboard.png"
      alt="Retail Dashboard"
    />
  </div>
</section>

<section className="case-section">

  <h2>Business Challenges</h2>

  <div className="challenge-grid">

    <div className="challenge-card">
      <h3>Inventory Tracking</h3>
      <p>
        Difficulty managing stock levels and product availability.
      </p>
    </div>

    <div className="challenge-card">
      <h3>Billing Efficiency</h3>
      <p>
        Slow billing processes affecting customer experience.
      </p>
    </div>

    <div className="challenge-card">
      <h3>Sales Visibility</h3>
      <p>
        Lack of real-time sales and profit insights.
      </p>
    </div>

    <div className="challenge-card">
      <h3>Purchase Management</h3>
      <p>
        Managing suppliers and purchase records manually.
      </p>
    </div>

  </div>

</section>

<section className="case-section">

  <h2>Why CrackOne</h2>

  <p>
    We build customized retail management solutions tailored to
    business workflows, ensuring operational efficiency,
    inventory accuracy, scalability and long-term support.
  </p>

</section>

<section className="case-section">

  <h2>Key Features</h2>

  <div className="feature-grid">

    <div className="feature-card">
      <h3>Billing Management</h3>
    </div>

    <div className="feature-card">
      <h3>Inventory Tracking</h3>
    </div>

    <div className="feature-card">
      <h3>Purchase Management</h3>
    </div>

    <div className="feature-card">
      <h3>Supplier Management</h3>
    </div>

    <div className="feature-card">
      <h3>Customer Management</h3>
    </div>

    <div className="feature-card">
      <h3>Sales Reports</h3>
    </div>

    <div className="feature-card">
      <h3>Expense Tracking</h3>
    </div>

    <div className="feature-card">
      <h3>Profit & Loss Analysis</h3>
    </div>

  </div>

</section>


     <section className="case-section">

      

  <h2>Who Can Use This Solution?</h2>

  <div className="retail-users-wrapper">

    <div className="retail-users-left">

      <div className="retail-user-item">
        <span className="retail-number">1</span>
        <h3>Footwear Shops</h3>
      </div>

      <div className="retail-user-item">
        <span className="retail-number">2</span>
        <h3>Garment Stores</h3>
      </div>

      <div className="retail-user-item">
        <span className="retail-number">3</span>
        <h3>Mobile Shops</h3>
      </div>

    </div>

    <div className="retail-center-image">
      <img
        src="/images/solutions/retail-center.jpg"
        alt="Retail Inventory"
      />
    </div>

    <div className="retail-users-right">

      <div className="retail-user-item">
        <span className="retail-number">4</span>
        <h3>Supermarkets</h3>
      </div>

      <div className="retail-user-item">
        <span className="retail-number">5</span>
        <h3>Electronics Stores</h3>
      </div>

      <div className="retail-user-item">
        <span className="retail-number">6</span>
        <h3>Multi Branch Retail Chains</h3>
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
      <p>
        Understand retail workflows, inventory structure and business requirements.
      </p>
    </div>

    <div className="process-card">
      
      <h3>System Design</h3>
      <p>
        Design billing, inventory and reporting modules based on business needs.
      </p>
    </div>

    <div className="process-card">
      
      <h3>Development</h3>
      <p>
        Build customized retail management and billing functionalities.
      </p>
    </div>

    <div className="process-card">
      
      <h3>Testing</h3>
      <p>
        Validate billing accuracy, inventory tracking and system reliability.
      </p>
    </div>

    <div className="process-card">
     
      <h3>Deployment</h3>
      <p>
        Deploy the solution and migrate existing business data securely.
      </p>
    </div>

    <div className="process-card">
      
      <h3>Support</h3>
      <p>
        Continuous maintenance, updates and feature enhancements.
      </p>
    </div>

  </div>

</section>

{/* Business Benefits */}
<section className="case-section">

  <h2>Business Benefits</h2>

  <div className="benefits-grid">

    <div className="benefit-card">
      Faster Billing Process
    </div>

    <div className="benefit-card">
      Real-Time Inventory Tracking
    </div>

    <div className="benefit-card">
      Improved Sales Visibility
    </div>

    <div className="benefit-card">
      Reduced Operational Errors
    </div>

    <div className="benefit-card">
      Better Customer Management
    </div>

    <div className="benefit-card">
      Scalable Business Growth
    </div>

  </div>

</section>

{/* CTA */}
<section className="cta-section">

  <h2>Need a Similar Solution?</h2>

  <p>
    Let's discuss how CrackOne can help transform your retail
    business with a customized billing and inventory management solution.
  </p>

 <button
  className="retail-talk-btn"
  onClick={() => window.location.href = "/contact"}
>
  Talk to an Expert
</button>

</section>

    </div>
  );
}
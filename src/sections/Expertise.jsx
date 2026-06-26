import "../styles/expertise.css";

const services = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "ERP Solutions",
  "Cloud Solutions",
  "Digital Marketing",
  "Custom Software",
  "AI Solutions",
];

export default function Expertise() {
  return (
    <section className="expertise-section">

      <div className="expertise-heading">
        <h2>Our Expertise</h2>
        <p>
          Delivering end-to-end digital solutions that help businesses grow,
          innovate and scale.
        </p>
      </div>

      <div className="orbit-wrapper">

        <div className="orbit-ring">

          {services.map((service, index) => (
            <div
              key={index}
              className="orbit-item"
              style={{
                "--angle": `${index * 45}deg`,
              }}
            >
              <span>{service}</span>
            </div>
          ))}

        </div>

        <div className="center-logo">
          <img src="/images/logo.png" alt="CrackOne" />
        </div>

      </div>

    </section>
  );
}
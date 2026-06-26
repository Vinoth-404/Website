import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          Creating Technology
          <br />
          That Moves Businesses Forward
        </h1>

        <p>
          Building intelligent software solutions for modern businesses.
        </p>

        <div className="hero-buttons">
          <button
            className="hero-primary-btn"
            onClick={() => (window.location.href = "/contact")}
          >
            Talk to an Expert
          </button>

          <button
            className="hero-secondary-btn"
            onClick={() =>
              document
                .getElementById("solutions")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Solutions
          </button>
        </div>
      </div>
    </section>
  );
}
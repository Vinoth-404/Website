import { useState } from "react";
import "../styles/contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send
} from "lucide-react";

export default function Contact() {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {

    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "199786c9-5278-4908-b4cc-99c6fca4c638"
    );

    formData.append(
      "subject",
      "New Contact Form - CrackOne Technologies"
    );

    formData.append(
      "from_name",
      "CrackOne Technologies"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult("✅ Message sent successfully!");
      event.target.reset();
    } else {
      setResult("❌ Something went wrong.");
    }

  };

  return (
    <>

      <Navbar />

      <section className="contact-page">

        <div className="contact-header">

          <p className="contact-tag">
            Contact Us
          </p>

          <h1>
            Let's Build Something Amazing Together
          </h1>

        

        </div>

        <div className="contact-container">

          {/* Left */}

          <div className="contact-info">

            <div className="info-card">

              <Phone />

              <div>

                <h3>Phone</h3>

                <p>+91 93614 13816</p>

              </div>

            </div>

            <div className="info-card">

              <Mail />

              <div>

                <h3>Email</h3>

                <p>admin@crackonetechnologies.xyz</p>

              </div>

            </div>

            <div className="info-card">

              <MapPin />

              <div>

                <h3>Location</h3>

                <p>Tamil Nadu, India</p>

              </div>

            </div>

            <div className="info-card">

              <Clock />

              <div>

                <h3>Working Hours</h3>

                <p>Mon - Sat | 9 AM - 6 PM</p>

              </div>

            </div>

          </div>

          {/* Right */}

          <form
            onSubmit={onSubmit}
            className="contact-form"
          >

            <input
  type="text"
  name="name"
  placeholder="Full Name"
  required
  pattern="[A-Za-z ]+"
  title="Name should contain only letters and spaces"
/>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
<input
  type="tel"
  name="phone"
  placeholder="Mobile Number"
  required
  pattern="[6-9][0-9]{9}"
  maxLength="10"
  title="Enter a valid 10-digit mobile number"
/>

            <input
              type="text"
              name="company"
              placeholder="Company Name"
            />

            <select
              name="service"
              required
            >

              <option value="">
                Select Service
              </option>

              <option>
                Web Development
              </option>

              <option>
                Mobile App Development
              </option>

              <option>
                ERP Solutions
              </option>

              <option>
                AI Solutions
              </option>

              <option>
                Digital Marketing
              </option>

              <option>
                Cloud Solutions
              </option>

            </select>

            <textarea
              rows="6"
              name="message"
              placeholder="Tell us about your project..."
              required
            ></textarea>

            <button type="submit">

              <Send size={18} />

              Send Message

            </button>

            <span className="result">
              {result}
            </span>

          </form>

        </div>

      </section>

      <Footer />

    </>
  );

}
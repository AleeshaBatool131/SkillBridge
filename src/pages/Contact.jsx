import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import "../components/Contact/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Full Name is required.";

    if (!formData.email.trim())
      newErrors.email = "Email is required.";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    )
      newErrors.email = "Invalid email address.";

    if (!formData.subject.trim())
      newErrors.subject = "Subject is required.";

    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validate();

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="contact-hero">

        <h1>Get In Touch</h1>

        <p>
          We'd love to hear from you.
          Whether you're a client or freelancer,
          our team is here to help.
        </p>

      </section>

      {/* Contact Cards */}

      <section className="contact-info">

        <div className="info-box">
          <FaEnvelope />
          <h3>Email</h3>
          <p>support@skillbridge.com</p>
        </div>

        <div className="info-box">
          <FaPhoneAlt />
          <h3>Phone</h3>
          <p>+92 300 1234567</p>
        </div>

        <div className="info-box">
          <FaMapMarkerAlt />
          <h3>Office</h3>
          <p>Lahore, Pakistan</p>
        </div>

        <div className="info-box">
          <FaClock />
          <h3>Working Hours</h3>
          <p>Mon - Fri | 9 AM - 6 PM</p>
        </div>

      </section>

      {/* Form */}

      <section className="contact-section">

        <div className="contact-form">

          <h2>Send us a Message</h2>

          {submitted && (
            <div className="success-message">
              Your message has been sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            <span>{errors.name}</span>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            <span>{errors.email}</span>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <span>{errors.subject}</span>

            <textarea
              rows="7"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <span>{errors.message}</span>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

        <div className="map-container">

            <h2>Our Location</h2>

            <iframe
                title="Skill Bridge Location"
                src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
                width="100%"
                height="400"
                style={{
                border: 0,
                borderRadius: "16px",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            </div>

      </section>

      {/* FAQ */}

      <section className="faq-section">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-card">
          <h3>How do I hire a freelancer?</h3>

          <p>
            Browse services, open the service details,
            and contact the seller directly.
          </p>
        </div>

        <div className="faq-card">
          <h3>How can I become a seller?</h3>

          <p>
            Register your account and create your
            professional seller profile.
          </p>
        </div>

        <div className="faq-card">
          <h3>Is Skill Bridge secure?</h3>

          <p>
            Yes. We focus on secure communication,
            verified freelancers, and trusted services.
          </p>
        </div>

      </section>

      <Footer />
    </>
  );
}

export default Contact;
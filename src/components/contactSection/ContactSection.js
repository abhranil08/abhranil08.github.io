import React from "react";
import { contactPageData, greeting, socialMediaLinks } from "../../portfolio";
import "./ContactSection.css";

const ContactSection = () => {
  const { contactSection, addressSection } = contactPageData;

  const contactItems = [
    {
      title: "Email",
      description: "Get in touch",
      href: "mailto:abhra.tb@gmail.com",
      icon: "✉️",
    },
    {
      title: "LinkedIn",
      description: "Connect professionally",
      href: socialMediaLinks.find((s) => s.name === "LinkedIn")?.link || "#",
      icon: "💼",
    },
    {
      title: "GitHub",
      description: "View my code",
      href: greeting.githubProfile,
      icon: "🐙",
    },
    {
      title: "Resume",
      description: "Download CV",
      href: greeting.resumeLink,
      icon: "📄",
    },
    {
      title: "Location",
      description: addressSection.subtitle,
      href: addressSection.location_map_link,
      icon: "📍",
    },
  ].filter((item) => item.href);

  return (
    <section id="contact" className="section section-contact">
      <div className="container">
        <h2 className="section-title">{contactSection.title}</h2>
        <p className="section-subtitle">{contactSection.description}</p>

        <div className="contact-container">
          <div className="contact-links">
            {contactItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="contact-item"
              >
                <div className="contact-icon">{item.icon}</div>
                <div className="contact-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

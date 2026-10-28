import { Mail, MessageCircle, ArrowUpRight, Send } from "lucide-react";

function Contact() {
  const email = "YOUR_EMAIL@example.com";

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">GET IN TOUCH</span>
          <h2>Let's Work Together</h2>
          <p>
            Have a project, job opportunity, or collaboration in mind?
            I'd be happy to hear from you.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-info">
            <span className="contact-icon">
              <Mail size={24} />
            </span>

            <h3>Let's start a conversation</h3>
            <p>
              I'm open to Data Analyst opportunities, projects, and
              professional collaborations.
            </p>

            <a className="contact-email" href={`mailto:${email}`}>
              <Mail size={18} />
              {email}
            </a>

            <a
              className="contact-button"
              href={`mailto:${email}?subject=Professional%20Enquiry`}
            >
              Send Me an Email
              <Send size={17} />
            </a>
          </div>

          <div className="contact-links">
            <h3>Connect with me</h3>

            <a
              href="https://www.linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>
                <MessageCircle size={19} />
                LinkedIn
              </span>
              <ArrowUpRight size={18} />
            </a>

            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>
                <ArrowUpRight size={19} />
                GitHub
              </span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
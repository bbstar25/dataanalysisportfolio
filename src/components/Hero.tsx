
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Download,
  BarChart3,
  TrendingUp,
  Database,
  FileSpreadsheet
} from "lucide-react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-tag">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          <p className="hero-greeting">Hello, I'm</p>

          <h2>
            ADEPOJU MOSURO-BURAIMO
            <span>.</span>
          </h2>

          <h2>
            Data Analyst & <span>Insight Explorer</span>
          </h2>

          <p className="hero-description">
            I transform raw data into meaningful insights that help
            businesses understand their performance and make better
            decisions. I enjoy working with data, discovering patterns,
            and solving real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Projects
              <ArrowUpRight size={18} />
            </a>

            <a href="/Azeez-Babatunde-CV.pdf" download className="secondary-btn">
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="hero-socials">
            <span>Connect with me</span>

            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            <a href="mailto:YOUR_EMAIL@example.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-background"></div>

          <div className="analytics-card">
            <div className="analytics-header">
              <div>
                <p>Analytics Overview</p>
                <h3>Data Insights</h3>
              </div>

              <BarChart3 size={28} />
            </div>

            <div className="analytics-chart">
              <div className="chart-bars">
                {[45, 70, 55, 85, 65, 95, 75, 100].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="chart-bar"
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>

              <div className="chart-labels">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
              </div>
            </div>

            <div className="analytics-footer">
              <div>
                <TrendingUp size={20} />
                <span>Data-driven decisions</span>
              </div>

              <Database size={22} />
            </div>
          </div>

            <div className="floating-tag tag-three">
            <  FileSpreadsheet size={18} />
            <span>Excel</span>
          </div>

          <div className="floating-tag tag-one">
            <Database size={18} />
            <span>SQL & Python</span>
          </div>

          <div className="floating-tag tag-two">
            <BarChart3 size={18} />
            <span>Data Visualization</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import {
  Target,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const About = () => {
  const highlights = [
    "Data cleaning and preparation",
    "Exploratory Data Analysis (EDA)",
    "Database querying and analysis",
    "Data visualization and reporting",
  ];

  return (
    <section className="about section" id="about">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-subtitle">GET TO KNOW ME</span>
          <h2>About <span>Me</span></h2>
          <p>A little about my journey into data analytics.</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Turning Data Into Meaningful Insights</h3>

            <p>
              I'm ADEPOJU MOSURO-BURAIMO, a data analyst passionate about
              exploring data, identifying patterns, and solving
              business problems through data-driven insights.
            </p>

            <p>
              I work with Python, SQL, Excel, and Tableau to
              collect, clean, analyze, and visualize data.
              I enjoy transforming complex datasets into clear
              information that supports better decision-making.
            </p>

            <p>
              I'm continuously improving my analytical skills
              through practical projects and real-world datasets.
            </p>

            <div className="about-highlights">
              {highlights.map((item) => (
                <div className="highlight-item" key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <div className="about-card-icon">
                <Target size={25} />
              </div>
              <h4>Problem Solving</h4>
              <p>
                Using data analysis to understand problems
                and discover useful solutions.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <Lightbulb size={25} />
              </div>
              <h4>Continuous Learning</h4>
              <p>
                Building my analytical knowledge through
                practical experience and projects.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <TrendingUp size={25} />
              </div>
              <h4>Data-Driven Thinking</h4>
              <p>
                Discovering trends and patterns to support
                informed business decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

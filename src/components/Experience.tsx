
import {
  BriefcaseBusiness,
  GraduationCap,
  CalendarDays,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-subtitle">
            MY BACKGROUND
          </span>

          <h2>Experience & <span>Education</span></h2>

          <p>
            My educational background and practical experience.
          </p>
        </div>

        <div className="experience-grid">
          {/* EXPERIENCE */}

          <div className="experience-column">
            <div className="timeline-heading">
              <div className="timeline-heading-icon">
                <BriefcaseBusiness size={22} />
              </div>

              <h3>Experience</h3>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div className="timeline-content">
                  <span className="timeline-date">
                    Project Experience
                  </span>

                  <h4>Frontend Developer</h4>

                  <h5>UNILAG ERP System – Client Project</h5>

                  <p>
                    Worked on the frontend development of a
                    University of Lagos ERP system for a client,
                    contributing to the development of its
                    user interface and application features.
                  </p>

                  <div className="timeline-tags">
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>CSS</span>
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div className="timeline-content">
                  <span className="timeline-date">
                    Practical Learning
                  </span>

                  <h4>Data Analytics Projects</h4>

                  <h5>Independent Project Work</h5>

                  <p>
                    Developing practical skills in data cleaning,
                    exploratory data analysis, database querying,
                    and data visualization using different
                    analytical tools.
                  </p>

                  <div className="timeline-tags">
                    <span>Python</span>
                    <span>SQL</span>
                    <span>Excel</span>
                    <span>Power BI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EDUCATION */}

          <div className="experience-column">
            <div className="timeline-heading">
              <div className="timeline-heading-icon">
                <GraduationCap size={22} />
              </div>

              <h3>Education</h3>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div className="timeline-content">
                  <span className="timeline-date">
                    Academic Background
                  </span>

                  <h4>Bachelor's Degree in Chemistry</h4>

                  <h5>University of Ilorin</h5>

                  <p>
                    Studied Chemistry, developing analytical,
                    research, problem-solving, and scientific
                    reasoning skills.
                  </p>

                  <div className="timeline-tags">
                    <span>Research</span>
                    <span>Analysis</span>
                    <span>Problem Solving</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="education-note">
              <CheckCircle2 size={20} />

              <p>
                Continuously learning and developing my
                technical and analytical skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

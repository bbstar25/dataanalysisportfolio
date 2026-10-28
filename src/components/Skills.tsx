
import {
  Code2,
  Database,
  FileSpreadsheet,
  BarChart3,
  Brain,
  Search,
} from "lucide-react";

const Skills = () => {
  const skillGroups = [
    {
      title: "Programming & Analysis",
      description: "Working with data using programming languages.",
      icon: <Code2 size={24} />,
      skills: ["Python", "Pandas", "NumPy", "Jupyter Notebook"],
    },
    {
      title: "Database Management",
      description: "Querying and managing structured data.",
      icon: <Database size={24} />,
      skills: ["SQL", "PostgreSQL", "Data Querying"],
    },
    {
      title: "Spreadsheet Analysis",
      description: "Organizing, cleaning, and analyzing datasets.",
      icon: <FileSpreadsheet size={24} />,
      skills: ["Microsoft Excel", "Pivot Tables", "Data Cleaning"],
    },
    {
      title: "Data Visualization",
      description: "Presenting information through visual reports.",
      icon: <BarChart3 size={24} />,
      skills: ["Power BI", "Dashboards", "Data Visualization"],
    },
    {
      title: "Data Exploration",
      description: "Understanding datasets and discovering patterns.",
      icon: <Brain size={24} />,
      skills: ["Exploratory Data Analysis", "Statistical Analysis"],
    },
    {
      title: "Data Collection",
      description: "Gathering information from online sources.",
      icon: <Search size={24} />,
      skills: ["Web Scraping", "Beautiful Soup", "Selenium"],
    },
  ];

  return (
    <section className="skills section" id="skills">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-subtitle">WHAT I WORK WITH</span>
          <h2>Technical <span>Skills</span></h2>
          <p>Tools and technologies I use in data analytics.</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <div className="skill-icon">
                {group.icon}
              </div>

              <h3>{group.title}</h3>

              <p>{group.description}</p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

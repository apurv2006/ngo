import React, { useState } from 'react';

function Projects() {
  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (index) => {
    setShowDetails((prevShowDetails) => ({
      ...prevShowDetails,
      [index]: !prevShowDetails[index],
    }));
  };

  const projects = [
    { title: 'Project A', description: 'Description of Project A' },
    { title: 'Project B', description: 'Description of Project B' },
    { title: 'Project C', description: 'Description of Project C' },
  ];

  return (
    <div>
      <h2>Our Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <button onClick={() => toggleDetails(index)}>{project.title}</button>
            {showDetails[index] && <p>{project.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;

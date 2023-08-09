import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Daily Dungeon',
      description: 'REACT',
      link: "https://fathomless-brook-62747-69ac2fbd8802.herokuapp.com/",
      repo: "https://github.com/jmcconna/Daily-Dungeon.git"
    },
    {
      name: 'Note Taker',
      description: 'Add Descrip',
      link: "https://afternoon-harbor-51161.herokuapp.com/notes",
      repo: "https://github.com/TThienT/Mod_11-Note-Taker"
    },

  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

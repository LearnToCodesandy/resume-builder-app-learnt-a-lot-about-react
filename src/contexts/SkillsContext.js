import React, { useState, createContext } from "react";

export const SkillsContext = createContext();

export const SkillsProvider = (props) => {
  const [skills, setSkills] = useState([]);
  return (
    <SkillsContext.Provider value={[skills, setSkills]}>
      {props.children}
    </SkillsContext.Provider>
  );
};

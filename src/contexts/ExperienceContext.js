import React, { useState, createContext } from "react";

export const ExperienceContext = createContext();

export const ExperienceProvider = (props) => {
  const [experienceDetails, setExperienceDetails] = useState([]);
  return (
    <ExperienceContext.Provider
      value={[experienceDetails, setExperienceDetails]}
    >
      {props.children}
    </ExperienceContext.Provider>
  );
};

import React, { useState, createContext } from "react";

export const EducationContext = createContext();

export const EducationProvider = (props) => {
  const [educationDetails, setEducationDetails] = useState([]);
  return (
    <EducationContext.Provider value={[educationDetails, setEducationDetails]}>
      {props.children}
    </EducationContext.Provider>
  );
};

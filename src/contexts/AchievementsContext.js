import React, { useState, createContext } from "react";

export const AchievementsContext = createContext();

export const AchievementsProvider = (props) => {
  const [achievements, setAchievements] = useState([]);
  return (
    <AchievementsContext.Provider value={[achievements, setAchievements]}>
      {props.children}
    </AchievementsContext.Provider>
  );
};

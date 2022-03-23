import { useContext, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import ExperienceCard from "./ExperienceCard";
import { ExperienceContext } from "../contexts/ExperienceContext";

const Experience = () => {
  const [experienceDetails, setExperienceDetails] = useContext(
    ExperienceContext
  );

  // states
  const [companyName, setCompanyName] = useState("");
  const [duration, setDuration] = useState("");
  const [por, setPor] = useState("");
  const [remarks, setremarks] = useState("");

  // handlers

  const addExperience = () => {
    let data = {
      companyName,
      duration,
      por,
      remarks
    };

    let temp = [...experienceDetails, data];
    setExperienceDetails(temp);
  };

  return (
    <div className="container">
      <div>
        {/* company name */}
        <div className="input-group m-3">
          <span className="input-group-text">Company Name...</span>
          <input
            type="text"
            placeholder="company name..."
            className="form-control"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        {/* company working duration */}
        <div className="input-group m-3">
          <span className="input-group-text">Duration of work</span>
          <input
            type="text"
            placeholder="3 years"
            className="form-control"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        {/* compnay position of responsibilies */}
        <div className="input-group m-3">
          <span className="input-group-text">Position of responsibilies</span>
          <input
            type="text"
            placeholder="assoicate manager,senior developer,..."
            className="form-control"
            value={por}
            onChange={(e) => setPor(e.target.value)}
          />
        </div>

        {/* remarks */}
        <div className="input-group m-3">
          <span className="input-group-text">Remarks</span>
          <textarea
            className="form-control"
            placeholder="Leave your remarks here"
            value={remarks}
            onChange={(e) => setremarks(e.target.value)}
          ></textarea>
        </div>

        {/* add experience */}
        <div className="input-group m-3">
          <button className="btn btn-outline-dark" onClick={addExperience}>
            Add Experience
          </button>
        </div>

        <div className="container">
          {experienceDetails.length !== 0 ? (
            experienceDetails.map((expDt, index) => (
              <ExperienceCard
                index={index}
                expDt={expDt}
                experienceDetails={experienceDetails}
                setExperienceDetails={setExperienceDetails}
                key={Math.random()}
              />
            ))
          ) : (
            <p>Try adding experience</p>
          )}
        </div>
      </div>
      {/* continue to next process */}
      <div className="btn-group m-3">
        <Link to="/education">
          <input
            type="submit"
            className="btn btn-warning m-1"
            value="previous"
          />
        </Link>
        <Link to="/skills">
          <input
            type="submit"
            className="btn btn-primary m-1"
            value="continue"
          />
        </Link>
      </div>
    </div>
  );
};

export default Experience;

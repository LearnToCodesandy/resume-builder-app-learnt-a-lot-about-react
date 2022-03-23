import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EducationCard from "./EducationCard";
import { EducationContext } from "../contexts/EducationContext";

const Education = () => {
  const [educationDetails, setEducationDetails] = useContext(EducationContext);
  const [college, setCollege] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [remarks, setRemarks] = useState("");
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (college.length !== 0 && from.length !== 0 && to.length !== 0) {
      console.log("entered effectt!");
      setDisable(false);
    }
  }, [college, from, to]);

  const addEducationToList = () => {
    let data = {
      college,
      from,
      to,
      remarks
    };
    setEducationDetails([...educationDetails, data]);
    setDisable(true);
    setCollege("");
    setFrom("");
    setTo("");
    setRemarks("");
  };

  return (
    <div>
      {/* add educations */}
      <div className="container">
        <h3 className="text-left">Add Education</h3>
        <p>Add educational qualifications in the decreasing order...</p>
        {/* education name */}
        <div className="input-group m-3">
          <span className="input-group-text">College Name...</span>
          <input
            type="text"
            placeholder="School/College/University name..."
            className="form-control"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            required
          />
        </div>

        {/* education year */}
        <div className="input-group m-3">
          <span className="input-group-text">From</span>
          <input
            type="date"
            className="form-control"
            onChange={(e) => setFrom(e.target.value)}
            value={from}
            required
          />
          <span className="input-group-text">To</span>
          <input
            type="date"
            className="form-control"
            onChange={(e) => setTo(e.target.value)}
            value={to}
            required
          />
        </div>

        {/* educational remarks */}
        <div className="input-group m-3">
          <span className="input-group-text">Remarks</span>
          <textarea
            className="form-control"
            placeholder="Leave your remarks here"
            onChange={(e) => setRemarks(e.target.value)}
            value={remarks}
          ></textarea>
        </div>
      </div>

      {/* add education button! */}
      <div className="input-group m-3">
        <input
          type="submit"
          value="Add Education"
          className="btn btn-outline-dark"
          onClick={addEducationToList}
          disabled={disable ? true : false}
        />
      </div>

      <div className="container m-3 d-flex flex-wrap align-items-center justify-content-flex-start">
        {educationDetails.length !== 0 ? (
          educationDetails.map((edudta, index) => (
            <EducationCard
              edudta={edudta}
              index={index}
              educationDetails={educationDetails}
              setEducationDetails={setEducationDetails}
              key={Math.random()}
            />
          ))
        ) : (
          <p>Please add atleast one education details!</p>
        )}
      </div>

      {/* continue to next process */}
      <div className="btn-group m-3">
        <Link to="/">
          <input
            type="submit"
            className="btn btn-warning m-1"
            value="previous"
          />
        </Link>
        <Link to="/experience">
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

export default Education;

import { useState } from "react";

const EducationCard = ({
  edudta,
  index,
  educationDetails,
  setEducationDetails
}) => {
  // states
  const [modalState, setModalState] = useState(false);

  // handlers
  const handleDeleteEducation = (index) => {
    educationDetails.splice(index, 1);
    setEducationDetails([...educationDetails]);
  };

  return (
    <div className="card my-1">
      <div className="card-body">
        <h5 className="card-title">{edudta.college}</h5>
        <span className="fs-6 m-1">
          {new Date(edudta.from).toLocaleDateString(undefined, {
            year: "2-digit",
            month: "short",
            day: "2-digit"
          })}{" "}
          to
          {new Date(edudta.to).toDateString()}
        </span>
        <p className="card-text">{edudta.remarks}</p>
        <div className="btn-group">
          <button
            className="btn btn-danger"
            onClick={() => handleDeleteEducation(index)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;

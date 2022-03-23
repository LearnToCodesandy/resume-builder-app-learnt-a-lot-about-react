const ExperienceCard = ({
  index,
  expDt,
  experienceDetails,
  setExperienceDetails
}) => {
  // handlers
  const handleDeleteExperience = (index) => {
    experienceDetails.splice(index, 1);
    setExperienceDetails([...experienceDetails]);
  };

  return (
    <div className="card my-1">
      <div className="card-body">
        <h5 className="card-title">{expDt.companyName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{expDt.duration}</h6>
        <p className="card-text">{expDt.por}</p>
        <p className="card-text">{expDt.remarks}</p>
        <div className="btn-group">
          <button
            className="btn btn-danger"
            onClick={() => handleDeleteExperience(index)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

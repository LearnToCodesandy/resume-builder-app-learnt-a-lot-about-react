import { useContext, createRef } from "react";
import { AchievementsContext } from "../contexts/AchievementsContext";
import { ExperienceContext } from "../contexts/ExperienceContext";
import { EducationContext } from "../contexts/EducationContext";
import { SkillsContext } from "../contexts/SkillsContext";
import { UserContext } from "../contexts/UserContext";
import { useScreenshot, createFileName } from "use-react-screenshot";

const Template = () => {
  const [userDetails, setUserDetails] = useContext(UserContext);
  const [skills, setSkills] = useContext(SkillsContext);
  const [achievements, setAchievements] = useContext(AchievementsContext);
  const [experience, setExperience] = useContext(ExperienceContext);
  const [education, setEducation] = useContext(EducationContext);

  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/png",
    quality: 1.0
  });

  const download = (image, { name = "img", extension = "png" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  return (
    <div className="container p-3 m-3 bg-light text-dark">
      <div
        className="container"
        ref={ref}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "20px"
        }}
      >
        <div className="header-container container m-3">
          <h1 className="text-start">
            {userDetails.length !== 0 ? userDetails[0].name : "Sophie Doe"}
          </h1>
          <p className="text-start fs-6">
            {userDetails.length !== 0
              ? userDetails[0].profile
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sunt."}
          </p>
        </div>
        <hr />

        <div className="body-container container my-3 d-flex">
          <div className="container left-container d-flex flex-column justify-content-start">
            {/* list of address! */}
            <ul className="list-group bg-light text-dark my-3">
              <h6>Details</h6>
              <li className="list-group-item bg-white text-dark">
                <span className="fs-6 text-dark">Email</span> : &nbsp;
                {userDetails.length !== 0
                  ? userDetails[0].email
                  : "example@gmail.com"}
              </li>
              <li className="list-group-item bg-white text-dark">
                <span className="fs-6 text-dark">Phone</span> : &nbsp;
                {userDetails.length !== 0
                  ? userDetails[0].phone
                  : "(+123 111 222 3333)"}
              </li>
              <li className="list-group-item bg-white text-dark">
                <span className="fs-6 text-dark">City</span> : &nbsp;
                {userDetails.length !== 0
                  ? userDetails[0].address.city
                  : "city"}
              </li>
              <li className="list-group-item bg-white text-dark">
                <span className="fs-6 text-dark">State & pincode</span> : &nbsp;
                {userDetails.length !== 0
                  ? userDetails[0].address.state +
                    "," +
                    userDetails[0].address.pincode
                  : " Andhra pradesh, 540123"}
              </li>
            </ul>

            {/* list of skills */}
            <ul className="list-group bg-light text-dark my-3">
              <h6>Skills</h6>
              {skills.length !== 0 ? (
                skills.map((skill_item) => (
                  <li
                    className="list-group-item bg-white text-dark d-flex align-items-center justify-content-between"
                    key={Math.random()}
                  >
                    <span>{skill_item.skill}</span>
                    <span class="badge rounded-pill bg-light">
                      {skill_item.level}
                    </span>
                  </li>
                ))
              ) : (
                <ul className="list-group bg-light text-dark my-3">
                  <li className="list-group-item bg-white text-dark">
                    An item
                  </li>
                  <li className="list-group-item bg-white text-dark">
                    An item
                  </li>
                  <li className="list-group-item bg-white text-dark">
                    An item
                  </li>
                  <li className="list-group-item bg-white text-dark">
                    An item
                  </li>
                  <li className="list-group-item bg-white text-dark">
                    An item
                  </li>
                </ul>
              )}
            </ul>

            {/*  list of achievments */}
            <ul className="list-group bg-light text-dark my-3">
              <h6>Achievements</h6>
              {achievements.length !== 0 ? (
                achievements.map((achievement_item) => (
                  <li
                    className="list-group-item bg-white text-dark d-flex align-items-center justify-content-between"
                    key={Math.random()}
                  >
                    <span>{achievement_item}</span>
                  </li>
                ))
              ) : (
                <ul className="list-group bg-light text-dark my-3">
                  <li className="list-group-item bg-white text-dark">
                    An item
                  </li>
                  <li className="list-group-item bg-white text-dark">
                    An item
                  </li>
                  <li className="list-group-item bg-white text-dark">
                    An item
                  </li>
                  <li className="list-group-item bg-white text-dark">
                    An item
                  </li>
                  <li className="list-group-item bg-white text-dark">
                    An item
                  </li>
                </ul>
              )}
            </ul>
          </div>

          <div className="container right-container d-flex flex-column align-items-center justify-content-start">
            {/* wrapper */}
            <div className="container m-1">
              <h3>Education Details</h3>
              {education.length !== 0 ? (
                education.map((ed) => (
                  <div className="card my-1">
                    <h5 className="card-header bg-white">{ed.college}</h5>
                    <div className="card-body bg-light">
                      <p className="card-title">
                        {ed.from} to {ed.to}
                      </p>
                      <p className="card-text">{ed.remarks}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="card my-1">
                  <h5 className="card-header bg-white">Education</h5>
                  <div className="card-body bg-light">
                    <p className="card-title">2002 to 2010</p>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* wrapper */}
            <div className="container m-1">
              <h3>Employment History</h3>
              {experience.length !== 0 ? (
                experience.map((exp) => (
                  <div className="card my-1" key={Math.random()}>
                    <h5 className="card-header bg-white">{exp.companyName}</h5>
                    <div className="card-body bg-light">
                      <p className="card-title">
                        <span className="text-decoration-underline">
                          Duration
                        </span>{" "}
                        : {exp.duration}
                      </p>
                      <p className="card-text">
                        {" "}
                        <span className="text-decoration-underline">
                          P.O.R
                        </span>{" "}
                        : {exp.por}
                      </p>
                      <p className="card-text">
                        {" "}
                        <span className="text-decoration-underline">
                          Remarks
                        </span>{" "}
                        : {exp.remarks}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="card my-1">
                  <h5 className="card-header bg-white">Emplyoment</h5>
                  <div className="card-body bg-light">
                    <p className="card-title">2002 to 2010</p>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <button
        className="btn btn-outline-success my-3"
        onClick={downloadScreenshot}
      >
        Download Resume (png Format)
      </button>
      {/* idea is to implement a subscription to download the pdf! */}
    </div>
  );
};

export default Template;

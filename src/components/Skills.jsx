import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { SkillsContext } from "../contexts/SkillsContext";

const Skills = () => {
  const [skills, setSkills] = useContext(SkillsContext);

  // states
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState("beginner");

  // handlers
  const handleSkill = () => {
    let data = {
      skill,
      level
    };
    if (skill.length !== 0) {
      let temp = [...skills, data];
      setSkills(temp);
    }
  };

  const handleSkillDelete = (id) => {
    let newList = skills.filter((item, index) => {
      if (index !== id) return item;
    });
    setSkills(newList);
  };

  return (
    <div className="container">
      {/* skill name */}
      <div className=" m-3">
        <label className="form-label">Add a skill</label>
        <input
          type="text"
          className="form-control"
          placeholder="management skills..."
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
      </div>
      {/* experience */}
      <div className=" m-3">
        <select
          className="form-select"
          onChange={(e) => setLevel(e.target.value)}
        >
          <option disabled>--level--</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      {/* add skill! */}
      <div className="m-3">
        <input
          type="submit"
          value="Add Skill"
          className="btn btn-outline-dark"
          onClick={handleSkill}
        />
      </div>

      {/* list out skills! */}
      {skills.length !== 0 ? (
        <ul className="list-group">
          {skills.map((sk, id) => (
            <li
              className="list-group-item d-flex align-items-center justify-content-between"
              key={Math.random()}
            >
              <span>{sk.skill}</span>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleSkillDelete(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Add your skill</p>
      )}

      {/* continue to next process */}
      <div className="btn-group">
        <Link to="/experience" className="m-1">
          <input type="submit" className="btn btn-warning" value="previous" />
        </Link>

        <Link to="/achievements" className="m-1">
          <input type="submit" className="btn btn-primary" value="continue" />
        </Link>
      </div>
    </div>
  );
};

export default Skills;

import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AchievementsContext } from "../contexts/AchievementsContext";

const Achievements = () => {
  const [achievements, setAchievements] = useContext(AchievementsContext);
  const [ach, setAch] = useState("");

  // handlers
  const handleAchievementDelete = (id) => {
    let newListAch = achievements.filter((item, index) => {
      if (index !== id) return item;
    });
    setAchievements(newListAch);
  };

  return (
    <div className="container">
      {/* achievements name */}
      <div className=" m-3">
        <label className="form-label">Add a skill</label>
        <input
          type="text"
          className="form-control"
          placeholder="won a gold medal in running in my btech..."
          value={ach}
          onChange={(e) => setAch(e.target.value)}
        />
      </div>

      {/* add achievements! */}
      <div className="m-3">
        <input
          type="submit"
          value="Add Achievement"
          className="btn btn-outline-dark"
          onClick={() => {
            if (ach.length !== 0) {
              setAchievements([...achievements, ach]);
              setAch("");
            }
          }}
        />
      </div>

      {/* list out the acheivements */}
      <ul className="list-group">
        {achievements.length !== 0 ? (
          achievements.map((ache, id) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={Math.random()}
            >
              <span>{ache}</span>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleAchievementDelete(id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>Add your acheivements !</p>
        )}
      </ul>

      {/* continue to next process */}
      <div className="btn-group">
        <Link to="/skills" className="m-1">
          <input type="submit" className="btn btn-warning" value="previous" />
        </Link>

        <Link to="/resume" className="m-1">
          <input type="submit" className="btn btn-primary" value="continue" />
        </Link>
      </div>
    </div>
  );
};

export default Achievements;

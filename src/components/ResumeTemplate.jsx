import Template from "./Template";

import { Link } from "react-router-dom";

const ResumeTemplate = () => {
  return (
    <div className="container">
      <Template />
      <div className="btn-group">
        <Link to="/achievements" className="m-1">
          <input type="submit" className="btn btn-warning" value="previous" />
        </Link>
      </div>
    </div>
  );
};

export default ResumeTemplate;

import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const User = () => {
  const [userDetails, setUserDetails] = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPinCode] = useState(0);
  const [profile, setProfile] = useState("");
  const [userStatus, setUserStatus] = useState(false);

  // handlers
  const handleUserData = () => {
    const userData = {
      name,
      email,
      phone,
      address: { city, state, pincode },
      profile
    };
    setUserStatus(true);
    setUserDetails([userData]);
  };

  return (
    <div className="container">
      {/* Full Name */}
      <div className=" m-3">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Full Name..."
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* email id */}
      <div className="m-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="abc@gmail.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      {/* phone number */}
      <div className="m-3">
        <label className="form-label">Phone Number</label>
        <input
          type="text"
          className="form-control"
          placeholder="(+123 111 222 3333)"
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      {/* address */}
      <div className=" m-3">
        <label className="form-label">Address</label>
        <div className="container">
          <input
            type="text"
            className="form-control my-1"
            placeholder="city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            className="form-control my-1"
            placeholder="state name"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <input
            type="number"
            className="form-control my-1"
            placeholder="pincode"
            value={pincode}
            onChange={(e) => setPinCode(e.target.value)}
          />
        </div>
      </div>

      {/* Profile */}
      <div className="m-3">
        <label>Profile</label>
        <textarea
          className="form-control"
          placeholder="write your cover letter or profile!"
          onChange={(e) => setProfile(e.target.value)}
          value={profile}
        ></textarea>
      </div>
      <button className="btn btn-outline-warning" onClick={handleUserData}>
        Add User Data!
      </button>
      <p className={userStatus ? "" : "d-none"}>User already added!</p>
      {/* continue to next process */}
      <div className="m-3">
        <Link to="education">
          <input type="submit" className="btn btn-primary" value="continue" />
        </Link>
      </div>
    </div>
  );
};

export default User;

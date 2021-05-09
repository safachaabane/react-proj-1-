import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div className="app"> 
        <h1>Personal Information :</h1>
        <ul> 
            <li> {props.children}</li>
            <li>{props.name}</li>
            <li>{props.bio}</li>
            <li>{props.profession}</li>
           

        </ul>
      <button onClick={() => props.show(props.name)}>Show the name</button>
    </div>
  );
};
Profile.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  show: PropTypes.func,
};
Profile.defaultProps = {
    name:"safsoufa ",
    bio:"nothing",
    profession:"web developper"
}

export default Profile;

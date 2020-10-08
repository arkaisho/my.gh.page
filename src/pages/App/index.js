import React from "react";
import ProfilePic from "../../components/ProfilePic/ProfilePic";
import Link from "../../components/Link/Link";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import medium from "../../assets/icons/medium.png";
import "./style.css";

let dados = {
  github: {
    link: "https://www.github.com/arkaisho",
    text: "GitHub",
  },
  linkedin: {
    link: "https://www.linkedin.com/in/joao-pedro-estevam/",
    text: "LinkedIn",
  },
  medium: {
    link: "https://medium.com/@joaopedro10782",
    text: "Medium",
  },
};

const appStyle = {
  position: "absolute",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginLeft: "10%",
};

export default class App extends React.Component {
  render() {
    return (
      <div style={appStyle}>
        <div className="profile-container">
          <ProfilePic />
          <div className="information">
            <h2 className="profile-name">João Pedro</h2>
            <div className="link-list">
              <Link icon={github} info={dados.github} />
              <br />
              <Link icon={linkedin} info={dados.linkedin} />
              <br />
              <Link icon={medium} info={dados.medium} />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

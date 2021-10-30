import React from "react";
import SocialIcons from "../SocialIcons";
import StaticText from "../StaticText";
import GithubLogo from "../images/github-logo.svg";
import LinkedinLogo from "../images/linkedin-logo.svg";

const AsideRight = () => {
  return (
    <>
      <ul className="grid-social-icons">
        <SocialIcons
          link="https://github.com/Boumarouane"
          source={GithubLogo}
          alt="lien github issam"
          classImg="git-logo"
        />
        <SocialIcons
          link="https://www.linkedin.com/in/issam-boumarouane/"
          source={LinkedinLogo}
          alt="lien linkedin issam"
          classImg="ln-logo"
        />
      </ul>
      <div className="grid-text-right">
        <StaticText firstText="2021" secondText="FOLLOW" />
      </div>
    </>
  );
};

export default AsideRight;

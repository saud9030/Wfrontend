import twitter from "./twitter.svg";
import linkedin from "./linkedin.svg";
import github from "./github.svg";
import React from "react";

const Footer = () => (
  <React.Fragment>
    <footer class="page-footer font-small cyan darken-3">
      <div class="footer-copyright text-center py-3">
        © 2019 Copyright:
        <a href="#">Wasel</a>
      </div>
      <span> created by Saud Almutairi </span>
      <div>
        <a href="https://twitter.com/saud95t">
          <img className="contactMe" src={twitter} alt="myTwitterPage" />
        </a>
        <a href="https://github.com/saud9030">
          <img className="contactMe" src={github} alt="myGithubPage" />
        </a>
        <a href="https://www.linkedin.com/saud8almutairi/">
          <img className="contactMe" src={linkedin} alt="myLinkedinPage" />
        </a>
      </div>
    </footer>
  </React.Fragment>
);

export default Footer;

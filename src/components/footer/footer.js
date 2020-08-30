import React from "react";

const Footer = (props) => {
  return (
    <React.Fragment>
      <footer className="main-footer">
        <center>
          <b>Version 1.0.0-pre </b>
          <b>&copy; dotCloud {props.year} All rights reserved.</b>
        </center>
      </footer>
    </React.Fragment>
  );
};

export default Footer;

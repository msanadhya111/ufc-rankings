import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleHomePage = () => {
    navigate("abc");
  };
  return (
    <React.Fragment>
      <div className={styles.header}>
        <span className={styles.text}>Absolute MMA Rankings</span>
        <button onClick={handleHomePage} className={styles.homepage}>
          Return to HomePage
        </button>
      </div>
    </React.Fragment>
  );
};

export default Header;

/*
With react-router 6 version we got something to route the url that is navigate, which will helps us
in re-routing the path.
In react-router 5 we have history for the same purpose.
*/

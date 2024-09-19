import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import styles from "./RankingList.module.css";
import PoundForPoundRankings from "./pound-for-pound-rankings";
import HeavyWeightRankings from "./heavyweight-rankings";
import LightWeightRankings from "./lightweight-rankings";

const RankingsLink = () => {
  const location = useLocation(); // This is used to know the current path at the moment
  return (
    <React.Fragment>
      {location.pathname === "/" && (
        <div className={styles.absoluteRankings}>
          <Link to="/pound-for-pound-rankings" style={{ color: "black" }}>
            Pound for Pound Ranking
          </Link>
          <Link to="/heavyweight-rankings" style={{ color: "black" }}>
            Heavyweight Ranking
          </Link>
          <Link to="/lightweight-rankings" style={{ color: "black" }}>
            Lightweight Ranking
          </Link>
        </div>
      )}
      <Routes>
        <Route path="/">
          <Route
            key={"A1"}
            path="pound-for-pound-rankings"
            element={<PoundForPoundRankings />}
          />
          <Route
            key={"A2"}
            path="heavyweight-rankings"
            element={<HeavyWeightRankings />}
          />
          <Route
            key={"A3"}
            path="lightweight-rankings"
            element={<LightWeightRankings />}
          />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default RankingsLink;

/*
BrowserRouter is like a parent to all the route one's. It is basically used to keep the UI sync with the url
present on the browser, means url to be changed and then load the correct UI accordingly, it is used to store all the 
components and to kee the ui in sync

Routes is used as an alternative to switch and it come's in v6 version only. Here it will give us all the
matching instead of the first one in acse of switch

Route is basically used to conditionally tell which component to load based on the url

Link is used to create the the linkage between different route and to load the component just like anchor tags

NavLink is just like Link just the it has some styling available and we can provide color to active and visited site 

At the end JSX(that comes with TSX) needs to converted to JS, React Module contains the req function to convert
it, so we need to import React for tsx file
*/

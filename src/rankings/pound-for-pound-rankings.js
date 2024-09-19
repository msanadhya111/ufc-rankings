import React, { useEffect, useState } from "react";
import styles from "./pound-for-pound-rankings.module.css";
import FighterInfoModal from "./FighterInfoModal";

const PoundForPoundRankings = () => {
  const [fightersData, setFightersData] = useState({});
  const data = [
    "Jon Joes",
    "Alexander Volkanovski",
    "Islam Makhachev",
    "Leon Edwards",
    "Israel Adesanya",
    "Aljamain Sterling",
    "Kamaru Usman",
    "Charles Oliveira",
    "Brandon Moreno",
    "Alex Pereira",
  ];
  const [ranking, setRanking] = useState([]);
  useEffect(() => {
    /*  const options = {
        method: 'GET',
        url: 'https://current-ufc-rankings.p.rapidapi.com/',
        headers: {
          'X-RapidAPI-Key': 'a70d5f6934msha19d343690d570cp1d6c5fjsnb4e01793e7ab',
          'X-RapidAPI-Host': 'current-ufc-rankings.p.rapidapi.com'
        }
      }; */
    async function fetchingPoundForPoundData() {
      const poundForPoundData = data;
      setRanking(poundForPoundData);
      //  const formattedData = await poundForPoundData.json();
      console.log(poundForPoundData);
    }
    fetchingPoundForPoundData();
  }, []);

  const moreInfoHandler = async (e) => {
    setFightersData({});
    const name = e.target.innerText.split(" ");

    const paramName = name[0] + "_" + name[1];
    const url = `https://ufc-fighters3.p.rapidapi.com/fighters/${paramName}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d3aec39bdemshcafc4ac40516df7p1ab75ejsnba8ce9192819",
        "X-RapidAPI-Host": "ufc-fighters3.p.rapidapi.com",
      },
    };

    const data = await fetch(url, options);
    console.log(data);
    const formattedData = await data.json();

    console.log(formattedData);
    setFightersData(formattedData);
  };

  return (
    <>
      {ranking.map((data) => {
        return (
          <div className={styles.ranking}>
            <div onClick={moreInfoHandler}>{data}</div>
          </div>
        );
      })}
      {fightersData.status && <FighterInfoModal data={fightersData} />}
    </>
  );
};

export default PoundForPoundRankings;

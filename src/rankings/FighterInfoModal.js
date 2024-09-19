import React, { useEffect, useState } from "react";
import styles from "./FighterInfoModal.module.css";

const FighterInfoModal = (props) => {
    const [popup, setPopup] = useState(true);
    const data = props.data;

    const modalHandler = () => {
        setPopup(false);
    };

    return (
        <>
            {popup && <div className={styles.modal}>
                <div className={styles.modalContent}>
                    {data.status === "success" && <div><b>His nickname is {data.fighter.nickname}. He fights in {data.fighter.weight} category. 
                    Currently he is {data.fighter.champion ? '' : 'not'} a champion. 
                    His record in mma is {data.fighter.win} wins and {data.fighter.loss} losses.
                    </b></div>}
                    {data.status === "fail" && <div><b>No data found for this fighter. Maybe check the spelling
                        of the fighter once</b></div>}
                <button className={styles.closeButton} onClick={modalHandler}>Close</button>
                </div>
            </div>}
        </>
    )
};

export default FighterInfoModal;
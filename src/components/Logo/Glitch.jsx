// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Glitch.module.css";

const Glitch = () => {
  return (
    <>
      <h1 className={styles.text}>
        <span className={styles.letter}>G L</span>
        <span className={`${styles.letter} ${styles["letter-2"]}`}>!</span>
        <span className={styles.letter}>{" "}T</span>
        <span className={styles.letter}>C H</span>
      </h1>
    </>
  );
};

export default Glitch;

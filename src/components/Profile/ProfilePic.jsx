import React from "react";
import styles from "./profilePic.module.scss";

export default function Profile({ high, width }) {
  return (
    <img
      className={styles["profilePic"]}
      src="/default_profilePic.jpg"
      alt="Foto de perfil"
      height={high}
      width={width}
    />
  );
}

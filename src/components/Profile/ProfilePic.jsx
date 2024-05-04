import React from "react";
import "./profilePic.scss";

export default function Profile({ high, width }) {
  return (
    <img
      className="profilePic"
      src="/default_profilePic.jpg"
      alt="Foto de perfil"
      height={high}
      width={width}
    />
  );
}

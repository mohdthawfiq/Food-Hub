import React from "react";
import load from "../../Assets/load.svg";
import style from "./Waitmessage.module.scss";

function Waitmessage() {
  return (
    <div className={style.loading}>
      <div className={style.logo}>
        <h1 className={style.loadName}>Data is loading please wait a second...</h1>
        <img src={load} />
      </div>
    </div>
  );
}

export default Waitmessage;

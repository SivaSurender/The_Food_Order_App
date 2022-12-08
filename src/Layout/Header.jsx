import React, { Fragment } from "react";
import mealsHeadreImage from "../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Delicious Meals</h1>
        <HeaderCartButton onClick={props.onClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsHeadreImage} alt="Meals food logo" />
      </div>
    </Fragment>
  );
};

export default Header;

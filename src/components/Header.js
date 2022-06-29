/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.LogoContainer}>
        <img
          src={"assets/header/cryptopunk-logo.png"}
          className={styles.Logo}
          alt="Cryptopunk logo"
        />
      </div>
      <div className={styles.SearchContainer}>Search</div>
      <div className={styles.NavContainer}>Menu</div>
    </header>
  );
};

export default Header;

import Image from "next/image";
import "styles/css/globals.css";
import styles from "styles/css/Home.module.css";
import React from "react";

export const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/logo.jpg" alt="logo" layout="fill" />
        </div>
        <h1>tamagozin.com</h1>
      </header>
    </div>
  );
};

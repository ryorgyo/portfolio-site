import Image from "next/image";
import "styles/css/globals.css";
import styles from "styles/css/Home.module.css";
import React from "react";

export const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/logo.jpg"
            alt="logo"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
        <h1>tamagozin.com</h1>
      </header>
    </div>
  );
};

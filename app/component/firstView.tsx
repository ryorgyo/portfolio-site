import Image from "next/image";
import "styles/css/globals.css";
import styles from "styles/css/Home.module.css";
import Link from "next/dist/client/link";
import { AiOutlineSwapRight } from "react-icons/ai";
import React from "react";

type props = {
  tech: string[];
  slogan: string[];
  profile: string;
  intro: string[];
};

export const FirstView = (props: props) => {
  return (
    <div className={styles.hero}>
      <div className={styles.dummy}></div>
      <div className={styles.left}>
        <h2>Ryosuke Nakamura</h2>
      </div>
      <div className={styles.right}>
        <div className={styles.headline}>
          {props.tech.map((tech: string) => {
            return <p key={tech}>{tech}</p>;
          })}
        </div>
        <div className={styles.slogan}>
          {props.slogan.map((slo: string) => {
            return <h3 key={slo}>{slo}</h3>;
          })}
        </div>
        <div className={styles.card}>
          <p className={styles.discription}>{props.profile}</p>
          <div className={styles.selfIntro}>
            <div className={styles.profile}>
              <Image src="/profile.jpg" alt="profile" layout="fill" />
            </div>
            <div className={styles.profileRight}>
              <div className={styles.intro}>
                {props.intro.map((intro: string) => {
                  return <p key={intro}>{intro}</p>;
                })}
              </div>
              <Link className={styles.link} href={"/"}>
                <AiOutlineSwapRight className={styles.svg} />
                <p>略歴</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

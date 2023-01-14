"use client";
import "styles/css/globals.css";
import styles from "styles/css/Home.module.css";
import React, { useCallback, useEffect, useState } from "react";
import { FirstView } from "./component/firstView";
import { Header } from "./component/header";
import WorkList from "./component/workList";
import BlogList from "./component/blogList";
import { List } from "./component/list";

export type workCardType = {
  createdDate: string;
  cop: string;
  category: string[];
  techUse: string[];
}[];

export type blogCardType = {
  title: string;
  category: string[];
  date: string[];
}[];

const Home = () => {
  const selfTech = [
    "99' / 私文学生 / オールラウンドサークル設立",
    "Web Design / Coding / Edit Movie",
    "HTML / CSS / JavaScript / PHP / Python",
    "23~ IT企業就職",
  ];

  const profileText =
    "ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。";

  const slogan = ["Keep Trying", "Wait For Contact"];
  const introduce = ["中村　涼介", "1999年4月", "文系大学卒"];

  const WORKCARDs: workCardType = [
    {
      createdDate: "2022/12/01",
      cop: "salon clear",
      category: ["可愛い", "スタイリッシュ", "Tech"],
      techUse: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
    {
      createdDate: "2022/12/01",
      cop: "株式会社colead様",
      category: ["穏やか", "スタイリッシュ", "Tech"],
      techUse: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
    {
      createdDate: "2022/12/01",
      cop: "ホルモン人生タロちゃん",
      category: ["可愛い", "カッコいい", "Tech"],
      techUse: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
    {
      createdDate: "2022/12/01",
      cop: "株式会社○○様",
      category: ["可愛い", "スタイリッシュ", "爽やか"],
      techUse: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
  ];

  const BLOGCARDs: blogCardType = [
    {
      title: "IT企業の特徴とは？~業界と業種の違いからIT業界を徹底解説~",
      category: ["IT業界", "就活"],
      date: ["2022/11/01", "2022/12/03"],
    },
    {
      title: "IT企業の特徴とは？~業界と業種の違いからIT業界を徹底解説~",
      category: ["IT業界", "就活"],
      date: ["2022/04/01", "2022/11/03"],
    },
    {
      title: "IT企業の特徴とは？~業界と業種の違いからIT業界を徹底解説~",
      category: ["IT業界", "就活"],
      date: ["2022/08/01", "2023/01/03"],
    },
    {
      title: "IT企業の特徴とは？~業界と業種の違いからIT業界を徹底解説~",
      category: ["IT業界", "就活"],
      date: ["2022/12/01", "2023/01/01"],
    },
  ];

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <FirstView
          tech={selfTech}
          profile={profileText}
          slogan={slogan}
          intro={introduce}
        />
        {/* <WorkList workCards={WORKCARDs} />
        <BlogList blogCards={BLOGCARDs} /> */}
        <List workCards={WORKCARDs} style="workList" />
        <List blogCards={BLOGCARDs} style="blogList" />
        <blockquote className="twitter-tweet">
          <p lang="ja" dir="ltr">
            プライベートで一切SNSでの発信を行なってこなかったので、今年は練習としてこのアカウント動かしてみます。よろしくお願いします🤲
            <a href="https://twitter.com/hashtag/23%E5%8D%92?src=hash&amp;ref_src=twsrc%5Etfw">
              #23卒
            </a>
            <a href="https://twitter.com/hashtag/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E5%88%9D%E5%BF%83%E8%80%85?src=hash&amp;ref_src=twsrc%5Etfw">
              #プログラミング初心者
            </a>
            <a href="https://twitter.com/hashtag/%E9%A7%86%E3%81%91%E5%87%BA%E3%81%97%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%81%A8%E7%B9%8B%E3%81%8C%E3%82%8A%E3%81%9F%E3%81%84?src=hash&amp;ref_src=twsrc%5Etfw">
              #駆け出しエンジニアと繋がりたい
            </a>
          </p>
          &mdash; り (@wryotten){" "}
          <a href="https://twitter.com/wryotten/status/1611195577349599232?ref_src=twsrc%5Etfw">
            January 6, 2023
          </a>
        </blockquote>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/p/CmLtDeiLAJ-/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
        >
          <a
            href="https://www.instagram.com/p/CmLtDeiLAJ-/?utm_source=ig_embed&amp;utm_campaign=loading"
            target="_blank"
          ></a>
        </blockquote>
        <script async src="//www.instagram.com/embed.js"></script>
        <section className={styles.contact}>
          <div className={styles.container}></div>
        </section>
      </main>
    </div>
  );
};

export default Home;

import "styles/css/globals.css";
import styles from "styles/css/Home.module.css";
import React from "react";
import { FirstView } from "./component/firstView";
import { Header } from "./component/header";
import WorkList from "./component/workList";
import BlogList from "./component/blogList";

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
      cop: "株式会社○○様",
      category: ["可愛い", "スタイリッシュ", "Tech"],
      techUse: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
    {
      createdDate: "2022/12/01",
      cop: "株式会社○○様",
      category: ["穏やか", "スタイリッシュ", "Tech"],
      techUse: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
    {
      createdDate: "2022/12/01",
      cop: "株式会社○○様",
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
      date: ["2022/12/01", "2023/01/03"],
    },
    {
      title: "IT企業の特徴とは？~業界と業種の違いからIT業界を徹底解説~",
      category: ["IT業界", "就活"],
      date: ["2022/12/01", "2023/01/03"],
    },
    {
      title: "IT企業の特徴とは？~業界と業種の違いからIT業界を徹底解説~",
      category: ["IT業界", "就活"],
      date: ["2022/12/01", "2023/01/03"],
    },
    {
      title: "IT企業の特徴とは？~業界と業種の違いからIT業界を徹底解説~",
      category: ["IT業界", "就活"],
      date: ["2022/12/01", "2023/01/03"],
    },
  ];

  // React.useEffect(() => {
  //   if (!isLoadwidgets) {
  //     const s = document.createElement("script");
  //     s.setAttribute("src", "https://platform.twitter.com/widgets.js");
  //     document.body.appendChild(s);
  //     isLoadwidgets = true;
  //   }
  // }, []);

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

        <WorkList workCards={WORKCARDs} />
        <BlogList blogCards={BLOGCARDs} />

        {/* <a
          className="twitter-timeline"
          data-width="27.5rem"
          data-height="350rem"
          data-theme="dark"
          data-chrome="noheadernofooternoborders"
          href="https://twitter.com/colisscom?ref_src=twsrc%5Etfw"
        >
          A Twitter List by Nr_Narumium
        </a>

        <a
          className="twitter-timeline"
          data-width="27.5rem"
          data-height="350rem"
          data-theme="dark"
          data-chrome="noheadernofooternoborders"
          href="https://twitter.com/colisscom?ref_src=twsrc%5Etfw"
        >
          A Twitter List by Nr_Narumium
        </a>

        <a
          className="twitter-timeline"
          data-width="27.5rem"
          data-height="350rem"
          data-theme="dark"
          data-chrome="noheadernofooternoborders"
          href="https://twitter.com/colisscom?ref_src=twsrc%5Etfw"
        >
          A Twitter List by Nr_Narumium
        </a> */}

        <section className={styles.contact}>
          <div className={styles.container}></div>
        </section>
      </main>
    </div>
  );
};

export default Home;

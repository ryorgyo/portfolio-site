import "styles/css/globals.css";
import styles from "styles/css/Home.module.css";
import React, { FC } from "react";
import type { workCardType, blogCardType } from "../page";
import { Card } from "./card";

const BlogList: FC<{
  workCards?: workCardType;
  blogCards?: blogCardType;
}> = (props) => {
  return (
    <div className={styles.blogList}>
      <h2 className={styles.title}>Blog</h2>
      <Card blogCards={props.blogCards} />
    </div>
  );
};

export default BlogList;

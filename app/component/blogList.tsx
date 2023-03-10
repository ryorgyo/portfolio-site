import "styles/css/globals.css";
import styles from "styles/css/Home.module.css";
import React, { FC, MouseEventHandler, useState } from "react";
import type { workCardType, blogCardType } from "../page";
import { Card } from "./card";
import { H2Animation } from "./h2Animation";

const BlogList: FC<{
  workCards?: workCardType;
  blogCards?: blogCardType;
}> = (props) => {
  const [hover, setHover] = useState(false);
  const handleMouseOver: MouseEventHandler<HTMLHeadingElement> = () => {
    setHover((hover) => !hover);
  };

  return (
    <div className={styles.blogList}>
      <h2
        className={styles.title}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOver}
      >
        <H2Animation hover={hover} />
      </h2>
      <Card blogCards={props.blogCards} />
    </div>
  );
};

export default BlogList;

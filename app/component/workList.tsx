import "styles/css/globals.css";
import styles from "styles/css/Home.module.css";
import React, { FC } from "react";
import type { workCardType, blogCardType } from "../page";
import { Card } from "./card";

const WorkList: FC<{
  workCards?: workCardType;
  blogCards?: blogCardType;
}> = (props) => {
  return (
    <div className={styles.workList}>
      <div>
        <h2 className={styles.title}>Web Design</h2>
      </div>
      <Card workCards={props.workCards} />
    </div>
  );
};

export default WorkList;

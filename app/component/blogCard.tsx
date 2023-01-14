import styles from "styles/css/Card.module.css";
import { FC } from "react";
import { bgColorChecker, cardType } from "./card";

export const BlogCard: FC<{
  card: cardType;
}> = (props) => {
  return (
    <div className={styles.blogDiscription}>
      <h3>{props.card.title}</h3>
      <div className={styles.blogCategory}>
        {props.card.category?.map((cate, index) => {
          return (
            <p className={styles[bgColorChecker(cate)]} key={index}>
              #{cate}
            </p>
          );
        })}
      </div>
      <div className={styles.date}>
        {props.card.date?.map((date, index) => {
          return <p key={index}>{date}</p>;
        })}
      </div>
    </div>
  );
};

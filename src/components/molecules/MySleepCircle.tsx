import { SubjectiveSleep } from "@/types";
import styles from "@/components/molecules/MySleepCircle.module.css";
import React from "react";
import {
  SentimentNeutral,
  SentimentSatisfiedAlt,
  SentimentVeryDissatisfied,
  SentimentVeryDissatisfiedOutlined,
  SentimentVerySatisfied,
  QuestionMarkOutlined,
} from "@mui/icons-material";
import Circle from "@/components/atoms/Circle";

interface MySleepProps {
  value: SubjectiveSleep | undefined;
  onClick: () => void;
}

const MySleepCircle = ({ value, onClick }: MySleepProps) => {
  const getSmiley = () => {
    switch (value) {
      case 100:
        return <SentimentVerySatisfied className={styles.icon} />;
      case 90:
        return <SentimentSatisfiedAlt className={styles.icon} />;
      case 80:
        return <SentimentNeutral className={styles.icon} />;
      case 70:
        return <SentimentVeryDissatisfied className={styles.icon} />;
      case 60:
        return <SentimentVeryDissatisfiedOutlined className={styles.icon} />;
      default:
        return <QuestionMarkOutlined fontSize={"large"} />;
    }
  };

  return (
    <div className={styles.container} onClick={onClick}>
      <p>My Sleep</p>
      <Circle>{getSmiley()}</Circle>
    </div>
  );
};

export default MySleepCircle;

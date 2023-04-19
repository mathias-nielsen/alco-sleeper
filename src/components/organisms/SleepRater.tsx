import { Card, CardContent, CardActions, IconButton } from "@mui/material";
import styles from "./SleepRater.module.css";
import {
  PhotoCamera,
  SentimentVerySatisfied,
  SentimentSatisfiedAlt,
  SentimentNeutral,
  SentimentVeryDissatisfied,
  SentimentVeryDissatisfiedOutlined,
} from "@mui/icons-material";

interface ASSleepRaterProps {}

export default function SleepRater({}: ASSleepRaterProps) {
  const handleClick = (rating: number) => {
    console.log("Subjective score: " + rating);
  };

  return (
    <Card className={styles.card}>
      <CardContent>
        <h3>How did you sleep?</h3>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => handleClick(100)} className={styles.button}>
          <SentimentVerySatisfied />
          <p>Very good</p>
        </IconButton>
        <IconButton onClick={() => handleClick(90)} className={styles.button}>
          <SentimentSatisfiedAlt />
          <p>Good</p>
        </IconButton>
        <IconButton onClick={() => handleClick(80)} className={styles.button}>
          <SentimentNeutral />
          <p>Neutral</p>
        </IconButton>
        <IconButton onClick={() => handleClick(70)} className={styles.button}>
          <SentimentVeryDissatisfied />
          <p>Bad</p>
        </IconButton>
        <IconButton onClick={() => handleClick(60)} className={styles.button}>
          <SentimentVeryDissatisfiedOutlined />
          <p>Very bad</p>
        </IconButton>
      </CardActions>
    </Card>
  );
}

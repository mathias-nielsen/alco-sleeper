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
import { useDispatch, useSelector } from "react-redux";
import formatToFitbitDate from "@/utils/formatToFitbitDate";
import { setSubjectiveSleep } from "@/store/slices/subjectiveSleepSlice";
import { selectDateValue } from "@/store/slices/selectedDateSlice";

interface ASSleepRaterProps {
  selectedDate: string;
  hide: () => void;
}

export default function SleepRater({ selectedDate, hide }: ASSleepRaterProps) {
  const dispatch = useDispatch();

  const handleClick = async (rating: number) => {
    //@ts-ignore
    await dispatch(
      setSubjectiveSleep({
        date: formatToFitbitDate(selectedDate),
        rating,
      })
    );
    hide();
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

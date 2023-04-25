import styles from "./SleepDetail.module.css";
import { ColorPalette } from "@/types/colors";

interface SleepDetailProps {
  title: string;
  hours: number;
  minutes: number;
  color: ColorPalette;
}

const SleepDetail = ({ title, hours, minutes, color }: SleepDetailProps) => {
  const formatTime = () => {
    const temp = ("0" + minutes).slice(-2);
    return `${hours}h ${temp}m`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div style={{ backgroundColor: color }} className={styles.dot} />
        <p>{title}</p>
      </div>
      <p>{formatTime()}</p>
    </div>
  );
};

export default SleepDetail;

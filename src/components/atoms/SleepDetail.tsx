import styles from "./SleepDetail.module.css";
import { ColorPalette } from "@/types/colors";
import { minutesCalc } from "@/utils/minutesCalc";

interface SleepDetailProps {
  title: string;
  totalMinutes: number;
  color: ColorPalette;
}

const SleepDetail = ({ title, totalMinutes, color }: SleepDetailProps) => {
  const formatTime = () => {
    const [hours, minutes] = minutesCalc(totalMinutes);
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

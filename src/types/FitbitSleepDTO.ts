export interface FitbitSleepDTO {
  dateOfSleep: string;
  duration: number;
  efficiency: number;
  endTime: string;
  infoCode: number;
  isMainSleep: boolean;
  levels: Levels;
  logId: number;
  logType: string;
  minutesAfterWakeup: number;
  minutesAsleep: number;
  minutesAwake: number;
  minutesToFallAsleep: number;
  startTime: string;
  timeInBed: number;
  type: string;
}

interface Levels {
  data: Array<SleepData>;
  shortData: Array<SleepData>;
  summary: SleepSummary;
}

interface SleepData {
  dateTime: string;
  level: "wake" | "deep" | "light" | "rem";
  seconds: number;
}

interface SleepSummary {
  wake: LevelSummary;
  light: LevelSummary;
  rem: LevelSummary;
  deep: LevelSummary;
}

interface LevelSummary {
  count: number;
  minutes: number;
  thirtyDayAvgMinutes: number;
}

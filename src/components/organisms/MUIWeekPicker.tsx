import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import isBetweenPlugin from "dayjs/plugin/isBetween";
import { styled } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDateValue,
  setDateRange,
} from "@/store/slices/selectedDateSlice";
import formatToFitbitDate from "@/utils/formatToFitbitDate";

dayjs.extend(isBetweenPlugin);

interface CustomPickerDayProps extends PickersDayProps<Dayjs> {
  dayIsBetween: boolean;
  isFirstDay: boolean;
  isLastDay: boolean;
}

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== "dayIsBetween" && prop !== "isFirstDay" && prop !== "isLastDay",
})<CustomPickerDayProps>(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(isFirstDay && {
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
  }),
  ...(isLastDay && {
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
  }),
})) as React.ComponentType<CustomPickerDayProps>;

function Day(props: PickersDayProps<Dayjs> & { selectedDay?: Dayjs | null }) {
  const { day, selectedDay, ...other } = props;

  if (selectedDay == null) {
    return <PickersDay day={day} {...other} />;
  }

  const start = selectedDay.startOf("week");
  const end = selectedDay.endOf("week");

  const dayIsBetween = day.isBetween(start, end, null, "[]");
  const isFirstDay = day.isSame(start, "day");
  const isLastDay = day.isSame(end, "day");

  return (
    <CustomPickersDay
      {...other}
      day={day}
      sx={dayIsBetween ? { px: 2.5, mx: 0 } : {}}
      dayIsBetween={dayIsBetween}
      isFirstDay={isFirstDay}
      isLastDay={isLastDay}
    />
  );
}

interface MUIWeekPickerProps {
  setShow: (arg0: boolean) => void;
}

export default function MUIWeekPicker({ setShow }: MUIWeekPickerProps) {
  // Redux state
  const dateState = useSelector(selectDateValue);
  const dispatch = useDispatch();

  // Local state
  const [value, setValue] = React.useState<any>(dayjs(dateState.value.date));

  const handleChange = (newValue: any) => {
    setValue(newValue);
    const last = newValue.endOf("week");
    const first = newValue.startOf("week");
    //@ts-ignore
    dispatch(
      setDateRange([
        formatToFitbitDate(first.toISOString()),
        formatToFitbitDate(last.toISOString()),
      ])
    );
    // setShow(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={value}
        disableFuture={true}
        onChange={handleChange}
        slots={{ day: Day }}
        slotProps={{
          day: {
            selectedDay: value,
          } as any,
        }}
      />
    </LocalizationProvider>
  );
}

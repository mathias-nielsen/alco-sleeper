export const minutesCalc = (total: number): [number, number] => {
  const hours = Math.floor(total / 60);
  const minutes = total % 60;
  return [hours, minutes];
};

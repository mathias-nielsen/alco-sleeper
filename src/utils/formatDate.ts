export const formatDate = (dateAsString: string): string => {
  // const dateObj = new Date(dateState.value.date);
  const dateObj = new Date(dateAsString);
  const weekDay = dateObj.toLocaleDateString("en-EN", { weekday: "long" });
  const date = dateObj.getDate();
  const monthLong = dateObj.toLocaleDateString("en-EN", { month: "long" });
  const year = dateObj.getFullYear();
  return `${weekDay} ${date} ${monthLong} ${year}`;
};

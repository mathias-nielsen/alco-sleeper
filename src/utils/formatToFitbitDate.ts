const formatToFitbitDate = (input: string) => {
  const temp = new Date(input);
  const month = ("0" + (temp.getMonth() + 1)).slice(-2);
  const date = ("0" + temp.getDate()).slice(-2);
  return `${temp.getFullYear()}-${month}-${date}`;
};

export default formatToFitbitDate;

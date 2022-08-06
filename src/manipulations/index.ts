export const onlyNumbers = (value: string): string => {
  const regex = /\d+/g;
  if (value && typeof value === "string") {
    const numbersArray = value.match(regex);
    return Array.isArray(numbersArray) ? numbersArray.join("") : "";
  } else {
    return "";
  }
};

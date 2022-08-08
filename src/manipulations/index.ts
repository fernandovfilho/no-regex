const applyRegex = (value: string, regex: RegExp): string => {
  if (value && typeof value === "string") {
    const valueArray = value.match(regex);
    return Array.isArray(valueArray) ? valueArray.join("") : "";
  } else {
    return "";
  }
};

export const onlyNumbers = (value: string): string => {
  const regex = /\d+/g;
  return applyRegex(value, regex);
};

export interface IOnlyLettersOptions {
  lowercase: boolean;
  uppercase: boolean;
}

export const onlyLetters = (
  value: string,
  { lowercase = true, uppercase = true }: IOnlyLettersOptions
): string => {
  if (lowercase === false && uppercase === false) return "";
  const regex = new RegExp(
    `[${uppercase ? "A-Z" : ""}${lowercase ? "a-z" : ""}]+`,
    "g"
  );
  return applyRegex(value, regex);
};

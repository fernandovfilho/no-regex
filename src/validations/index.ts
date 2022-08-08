export const isEmail = (value: string): boolean => {
  return new RegExp("^([a-z0-9_.+-]+)@([da-z.-]+).([a-z.]{2,6})$").test(value);
};

export const isIPv4 = (value: string): boolean => {
  return new RegExp(
    "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"
  ).test(value);
};

export interface IIsUsernameOptions {
  minLength?: number;
  maxLength?: number;
  underline?: boolean;
  dash?: boolean;
}

export const isUsername = (
  value: string,
  {
    minLength = 3,
    maxLength = 16,
    underline = true,
    dash = true,
  }: IIsUsernameOptions
): boolean => {
  let regex = `^[a-z0-9${underline ? "_" : ""}${
    dash ? "-" : ""
  }]{${minLength},${maxLength}}$`;
  return new RegExp(regex).test(value);
};

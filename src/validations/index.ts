const testRegex = (regex: RegExp, value: string): boolean => {
  return new RegExp(regex).test(value);
};

export const isEmail = (value: string): boolean => {
  return testRegex(/^([a-z0-9_.+-]+)@([da-z.-]+).([a-z.]{2,6})$/, value);
};

export const isIPv4 = (value: string): boolean => {
  return testRegex(
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,
    value
  );
};

export const isUrl = (value: string): boolean => {
  return testRegex(
    /^(?:http|https|ftp|mailto|file|data|irc|ws|wss):\/\/[A-Za-z0-9\-]{0,63}(\.[A-Za-z0-9\-]{0,63})+(:\d{1,4})?\/*(\/*[A-Za-z0-9\-._]+\/*)*(\?.*)?(#.*)?/,
    value
  );
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
  return testRegex(new RegExp(regex), value);
};

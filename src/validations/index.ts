export const isEmail = (value: string): boolean => {
  return new RegExp("^([a-z0-9_.+-]+)@([da-z.-]+).([a-z.]{2,6})$").test(value);
};

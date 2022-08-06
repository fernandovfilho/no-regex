import { onlyNumbers } from "../../src";

describe("testing manipulations functions", () => {
  const onlyNumbersCases = [
    ["test9782", "9782"],
    ["test123test", "123"],
    ["test", ""],
    ["", ""],
  ];

  test.each(onlyNumbersCases)(
    "onlyNumbersCases > given %p, should return %p",
    (value, expected) => {
      expect(onlyNumbers(value as string)).toBe(expected);
    }
  );
});

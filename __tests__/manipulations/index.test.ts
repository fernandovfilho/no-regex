import * as NoRegex from "../../src";
import { IOnlyLettersOptions } from "../../src/manipulations";

describe("testing manipulations functions", () => {
  const onlyNumbersCases = [
    ["test9782", "9782"],
    ["test123test", "123"],
    ["test", ""],
    ["", ""],
  ];

  const onlyLettersCases = [
    ["lE123tterS123", {} as IOnlyLettersOptions, "lEtterS"],
    ["lE123tterS123", { uppercase: false } as IOnlyLettersOptions, "ltter"],
    ["lE123tterS123", { lowercase: false } as IOnlyLettersOptions, "ES"],
  ];

  test.each(onlyNumbersCases)(
    "onlyNumbers > given %p, should return %p",
    (value, expected) => {
      expect(NoRegex.onlyNumbers(value as string)).toBe(expected);
    }
  );

  test.each(onlyLettersCases)(
    "onlyLetters > given %p and %p, should return %p",
    (value, options, expected) => {
      expect(
        NoRegex.onlyLetters(value as string, options as IOnlyLettersOptions)
      ).toBe(expected);
    }
  );
});

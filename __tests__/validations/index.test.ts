import { isEmail } from "../../src";

describe("testing validations functions", () => {
  const isEmailCases = [
    ["fernando@email.com", true],
    ["fernando.vargas@email.com", true],
    ["fernando", false],
  ];

  test.each(isEmailCases)("given %p, should return %p", (email, expected) => {
    expect(isEmail(email as string)).toBe(expected);
  });
});

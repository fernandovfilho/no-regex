import { isEmail, isIPv4 } from "../../src";

describe("testing validations functions", () => {
  const isEmailCases = [
    ["fernando@email.com", true],
    ["fernando.vargas@email.com", true],
    ["test", false],
    ["", false],
  ];

  const isIPv4Cases = [
    ["192.168.0.1", true],
    ["9.255.255.255", true],
    ["test", false],
    ["", false],
  ];

  test.each(isEmailCases)(
    "isEmail > given %p, should return %p",
    (value, expected) => {
      expect(isEmail(value as string)).toBe(expected);
    }
  );

  test.each(isIPv4Cases)(
    "isIPv4 > given %p, should return %p",
    (value, expected) => {
      expect(isIPv4(value as string)).toBe(expected);
    }
  );
});

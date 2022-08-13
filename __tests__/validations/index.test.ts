import * as NoRegex from "../../src";
import { IIsUsernameOptions } from "../../src/validations";

describe("testing validations functions", () => {
  const useCases = [
    {
      test: "isEmail",
      cases: [
        ["fernando@email.com", true],
        ["fernando.vargas@email.com", true],
        ["test", false],
        ["", false],
      ],
    },
    {
      test: "isIPv4",
      cases: [
        ["192.168.0.1", true],
        ["9.255.255.255", true],
        ["test", false],
        ["", false],
      ],
    },
    {
      test: "isUrl",
      cases: [
        ["https://google.com", true],
        ["ws://test.com", true],
        ["ftp://test.com", true],
        ["http://localhost.com/test?test=ok", true],
        ["error-ftp://test.com", false],
        ["test", false],
        ["", false],
      ],
    },
  ];

  for (const testCase of useCases) {
    test.each(testCase.cases)(
      `${testCase.test} > given %p, should return %p`,
      (value, expected) => {
        expect(NoRegex[testCase.test](value as string)).toBe(expected);
      }
    );
  }

  const isUsernameCases = [
    ["user_test", {}, true],
    ["user_test-too-long", {}, false],
    ["user_test", { minLength: 10 } as IIsUsernameOptions, false],
    ["user_test-too-long", { maxLength: 10 } as IIsUsernameOptions, false],
    ["user-test", { dash: false } as IIsUsernameOptions, false],
    ["user_test", { underline: false } as IIsUsernameOptions, false],
  ];

  test.each(isUsernameCases)(
    `isUsername > given %p and %p, should return %p`,
    (value, options, expected) => {
      expect(
        NoRegex.isUsername(value as string, options as IIsUsernameOptions)
      ).toBe(expected);
    }
  );
});

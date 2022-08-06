import * as NoRegex from "../../src";

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
      test: "isUsername",
      cases: [
        [{ value: "user_test" }, true],
        [{ value: "user_test-too-long" }, false],
        [{ value: "user_test", minLength: 10 }, false],
        [{ value: "user_test-too-long", maxLength: 10 }, false],
        [{ value: "user-test", dash: false }, false],
        [{ value: "user_test", underline: false }, false],
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
});

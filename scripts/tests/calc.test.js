/**
 * @jest-environment jsdom
 */

const { TestScheduler } = require("jest");
const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        })
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        })
        test("adding floating point numbers", () => {
            const value = 0.1 + 0.2;
            expect(value).toBeCloseTo(0.3);
        })
        test("adding floating point numbers 2", () => {
            const value2 = 0.5 + 0.6;
            expect(value2).toBeCloseTo(1.1);
        })
    });
    describe("Subtraction function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });
})
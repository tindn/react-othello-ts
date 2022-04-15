import { moveOne } from "./boardLogic";
import { Direction } from "./types";

describe("board logic tests", () => {
  describe("moveOne tests", () => {
    it("move in the middle of the board", () => {
      expect(moveOne(41, Direction.N)).toBe(33);
      expect(moveOne(41, Direction.NE)).toBe(34);
      expect(moveOne(41, Direction.E)).toBe(42);
      expect(moveOne(41, Direction.SE)).toBe(50);
      expect(moveOne(41, Direction.S)).toBe(49);
      expect(moveOne(41, Direction.SW)).toBe(48);
      expect(moveOne(41, Direction.W)).toBe(40);
      expect(moveOne(41, Direction.NW)).toBe(32);
    });

    it("move on the top edge", () => {
      expect(moveOne(3, Direction.N)).toBe(-1);
      expect(moveOne(3, Direction.NE)).toBe(-1);
      expect(moveOne(3, Direction.E)).toBe(4);
      expect(moveOne(3, Direction.SE)).toBe(12);
      expect(moveOne(3, Direction.S)).toBe(11);
      expect(moveOne(3, Direction.SW)).toBe(10);
      expect(moveOne(3, Direction.W)).toBe(2);
      expect(moveOne(3, Direction.NW)).toBe(-1);
    });

    it("move on the bottom edge", () => {
      expect(moveOne(61, Direction.N)).toBe(53);
      expect(moveOne(61, Direction.NE)).toBe(54);
      expect(moveOne(61, Direction.E)).toBe(62);
      expect(moveOne(61, Direction.SE)).toBe(-1);
      expect(moveOne(61, Direction.S)).toBe(-1);
      expect(moveOne(61, Direction.SW)).toBe(-1);
      expect(moveOne(61, Direction.W)).toBe(60);
      expect(moveOne(61, Direction.NW)).toBe(52);
    });
    it("move on the left edge", () => {
      expect(moveOne(56, Direction.N)).toBe(48);
      expect(moveOne(56, Direction.NE)).toBe(49);
      expect(moveOne(56, Direction.E)).toBe(57);
      expect(moveOne(56, Direction.SE)).toBe(-1);
      expect(moveOne(56, Direction.S)).toBe(-1);
      expect(moveOne(56, Direction.SW)).toBe(-1);
      expect(moveOne(56, Direction.W)).toBe(-1);
      expect(moveOne(56, Direction.NW)).toBe(-1);
    });
    it("move on the right edge", () => {
      expect(moveOne(7, Direction.N)).toBe(-1);
      expect(moveOne(7, Direction.NE)).toBe(-1);
      expect(moveOne(7, Direction.E)).toBe(-1);
      expect(moveOne(7, Direction.SE)).toBe(-1);
      expect(moveOne(7, Direction.S)).toBe(15);
      expect(moveOne(7, Direction.SW)).toBe(14);
      expect(moveOne(7, Direction.W)).toBe(6);
      expect(moveOne(7, Direction.NW)).toBe(-1);
    });
  });
});

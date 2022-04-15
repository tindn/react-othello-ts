import { getGamePiecesByColor } from "./gameLogic";
import { Color, GamePieces } from "./types";

describe("game logic tests", () => {
  describe("getGamePiecesByColor tests", () => {
    it("should get game pieces by color", () => {
      const gamePieces: GamePieces = {
        "27": Color.white,
        "28": Color.black,
        "35": Color.black,
        "36": Color.white,
      };
      expect(getGamePiecesByColor(gamePieces)).toEqual({
        [Color.black]: ["28", "35"],
        [Color.white]: ["27", "36"],
      });
    });

    it("should handle empty scenario", () => {
      const gamePieces: GamePieces = {};
      expect(getGamePiecesByColor(gamePieces)).toEqual({
        [Color.black]: [],
        [Color.white]: [],
      });
    });
  });
});

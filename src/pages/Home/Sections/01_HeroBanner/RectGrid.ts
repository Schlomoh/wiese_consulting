import { RectData, SQUARE_GAP, SQUARE_SIZE } from "./useCreateSketch";

const createArray = (number: number) => Array.from(new Array(number).keys());
const normalize = (min: number, max: number, val: number) =>
  (val - min) / max - min;

class RectGrid {
  private static createColums(tempColumn: RectData[], x: number, y: number) {
    if (
      x % (SQUARE_SIZE + SQUARE_GAP) === 0 &&
      y % (SQUARE_SIZE + SQUARE_GAP) === 0
    ) {
      const alpha = normalize(0, window.innerWidth, x) * Math.random() * 255;
      const newColumn = {
        x,
        y,
        speed: Math.random(),
        time: 100 * Math.random(),
        alpha,
      };

      return [...tempColumn, newColumn];
    } else return tempColumn;
  }

  private static createGrid(accu: RectData[][], x: number[], i: number) {
    const column = x.reduce(
      (accu: RectData[], y) => RectGrid.createColums(accu, i, y),
      []
    );
    return [...accu, column];
  }

  static createRects(width: number, height: number) {
    const grid = createArray(width).map(() => createArray(height));
    return grid.reduce(RectGrid.createGrid, []);
  }
}

export default RectGrid;

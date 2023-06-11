import { NavBarContext } from "@/components";
import { useContext, useEffect, useRef } from "react";

import p5Types from "react-p5/node_modules/@types/p5";
import RectGrid from "./RectGrid";

// replacement type for p5 to avoid ts error bug on 'clear' method
type FixedP5 = p5Types & {
  clear: () => void;
};

export interface RectData {
  x: number;
  y: number;
  alpha: number;
  speed: number;
  time: number;
}

export const SQUARE_SIZE = 80;
export const SQUARE_GAP = 2;

/**
 * Creates the `setup` and `draw` functions.
 *
 * Pauses the render loop when out of frame making use of the `isAtTop` value provided by the `NavBarContext`.
 *
 * @returns the `setup` and `draw` function for the `Sketch` component provide by react-p5
 */
function useCreateSketch() {
  const { isAtTop } = useContext(NavBarContext);

  const instance = useRef<null | FixedP5>(null);
  const dimensions = useRef({ width: 0, height: 0 });
  const rectGrid = useRef([] as RectData[][]);

  useEffect(() => {
    if (!instance.current) return;
    isAtTop ? instance.current.loop() : instance.current.noLoop();
  }, [isAtTop]);

  const setup = (p5: FixedP5, parentRef: Element) => {
    if (!parentRef) return;

    instance.current = p5;

    instance.current
      .createCanvas(parentRef.clientWidth, parentRef.clientHeight)
      .parent(parentRef);

    instance.current.windowResized = function () {
      instance.current?.noLoop();
      dimensions.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      const { width, height } = dimensions.current;
      instance.current?.resizeCanvas(width, height);
      rectGrid.current = RectGrid.createRects(width, height);
      instance.current?.loop();
    };

    rectGrid.current = RectGrid.createRects(
      window.innerWidth,
      window.innerHeight
    );
  };

  const draw = (p5: FixedP5) => {
    const { current } = instance;
    if (!current || !isAtTop) return;
    // clear last frame
    current.clear();

    const timeScalar = (time: number) => Math.abs(Math.sin(time));

    rectGrid.current.forEach((xAxis) =>
      xAxis.forEach((rect, y) => {
        rect.time += (p5.deltaTime / 4000) * rect.speed;
        current.noStroke();
        current.fill(255, 255, 255, rect.alpha * timeScalar(rect.time));
        current.rect(rect.x, rect.y, SQUARE_SIZE, SQUARE_SIZE, 10, 10, 10, 10);
      })
    );
  };

  return { setup, draw };
}

export default useCreateSketch;

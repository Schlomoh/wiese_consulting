import { NavBarContext } from "@/components";
import { useContext, useEffect, useRef } from "react";
import { useIntersection } from "react-use";

/**
 * Creates the observer and observes the given element (by ref)
 *
 * Then takes the `isIntersecting` property of the observer and updates the context value of `isAtTop` with it.
 *
 * @returns a ref of the oberved object
 */
function useIsAtTop(): React.MutableRefObject<HTMLDivElement | null> {
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const observer = useIntersection(bannerRef, { root: null, threshold: 0.01 });
  const { setIsAtTop } = useContext(NavBarContext);

  useEffect(() => {
    if (observer) setIsAtTop(observer.isIntersecting);
  }, [observer?.isIntersecting]);

  return bannerRef;
}

export default useIsAtTop;

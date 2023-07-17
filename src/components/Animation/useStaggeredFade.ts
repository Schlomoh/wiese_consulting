import { stagger, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useIntersection } from "react-use";

const useStaggeredFade = (selectors: string[]) => {
  const [scope, animate] = useAnimate();
  const observedElement = useRef<HTMLElement>(null);
  const [isVisible, setVisible] = useState(false);
  const observer = useIntersection(observedElement, {
    rootMargin: "-50px 0px",
  });

  useEffect(() => {
    if (!observer) return;

    setVisible(observer.isIntersecting);
  }, [observer?.isIntersecting]);

  useEffect(() => {
    selectors.forEach((selector) => {
      animate(
        selector,
        isVisible ? { scale: 1, opacity: 1 } : { scale: 0.92, opacity: 0 },
        { delay: stagger(0.3) }
      );
    });
  }, [isVisible]);

  return { scope, observedElement };
};

export default useStaggeredFade;

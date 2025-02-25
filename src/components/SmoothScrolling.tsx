import { ReactLenis, LenisProps } from "@studio-freight/react-lenis/types";
import { forwardRef, ReactNode } from "react";

type SmoothScrollingProps = {
  children: ReactNode;
};

const SmoothScrolling = forwardRef<HTMLElement, SmoothScrollingProps>(
  ({ children }, ref) => {
    return (
      <ReactLenis ref={ref} root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
        {children}
      </ReactLenis>
    );
  }
);

export default SmoothScrolling;
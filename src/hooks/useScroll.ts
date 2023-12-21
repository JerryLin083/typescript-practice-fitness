import { useEffect } from "react";

const useScroll = (ref: { current: HTMLDivElement | null }) => {
  useEffect(() => {
    const el = ref.current as HTMLDivElement;
    function onWheel(e: WheelEvent) {
      if (e.deltaY > 0) {
        el.scrollLeft += 500;
      } else {
        el.scrollLeft -= 500;
      }

      e.preventDefault();
    }

    el.addEventListener("wheel", onWheel, true);

    return () => el.removeEventListener("wheel", onWheel, true);
  }, [ref]);
};

export default useScroll;

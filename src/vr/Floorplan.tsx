import { unsafe__useFiveInstance } from "@realsee/five/react";
import { TopviewFloorplanPlugin } from "@realsee/dnalogel";
import { useEffect, useRef } from "react";
import floorplanJSON from "../data-source/floorplan.json";
import { FloorplanServerData } from "@realsee/dnalogel";
export const Floorplan = () => {
  const five = unsafe__useFiveInstance();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const topviewFloorplanPlugin = TopviewFloorplanPlugin(five, {
        hoverEnable: true
      });
      
      topviewFloorplanPlugin.appendTo(ref.current);
      topviewFloorplanPlugin.load(
        floorplanJSON as unknown as FloorplanServerData,
      ).then(() => {
        topviewFloorplanPlugin.show();
      });
      return () => {
        topviewFloorplanPlugin.dispose();
      };
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10,
        pointerEvents: "auto",
      }}
      ref={ref}
    ></div>
  );
};

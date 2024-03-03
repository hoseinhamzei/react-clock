import React from "react";
import { ClockHandProps } from "./analogClockTypes";

/**
 * ClockHand component for displaying clock hands
 * @param rotation - rotation of the clock hand in degrees
 * @param color - color of the clock hand
 * @param length - length of the clock hand
 * @param visible - flag to determine if the clock hand is visible
 * @param smooth - flag to determine if smooth transition is enabled
 */
const ClockHand: React.FC<ClockHandProps> = ({
  rotation,
  color,
  length,
  visible = true,
  smooth = false,
  thickness
}) => {
  /**
   * Style for the clock hand
   */
  const handStyle: React.CSSProperties = {
    backgroundColor: color,
    width: length,
    transform: `rotate(${rotation}deg)`,
    transition: smooth ? "transform 0.3s ease" : "none",
    height: thickness
  };

  return visible ? (
    <div className="analog-clock-hand" style={handStyle}></div>
  ) : null;
};

export default ClockHand;

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
declare const ClockHand: React.FC<ClockHandProps>;
export default ClockHand;

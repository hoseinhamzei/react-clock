import { FC } from "react";
import "./AnalogClock.css";
import { AnalogClockProps } from "./analogClockTypes";
/**
 * AnalogClock component displays an analog clock with customizable options.
 * @param {boolean} showMinuteHand - Whether to show the minute hand
 * @param {boolean} showSecondHand - Whether to show the second hand
 * @param {boolean} showBorder - Whether to show the clock border
 * @param {boolean} showHandBase - Whether to show the hand base
 * @param {boolean} smooth - Whether to smoothly transition the hand movement
 * @param {boolean} whiteNumbers - Whether to display white numbers on the clock face
 * @param {boolean} square - Whether the clock should be square
 * @param {string} numbersType - Type of numbers to display on the clock face (numbers/dots)
 * @param {string} borderColor - Color of the clock border
 * @param {string} handBaseColor - Color of the hand base
 * @param {Object} handColor - Object containing colors for each hand (hour, minute, second)
 * @param {Object} handLength - Object containing lengths for each hand (hour, minute, second)
 * @param {string} size - Size of the clock, eg. 200px
 * @param {string} backgroundColor - Background color of the clock
 * @param {Date} staticDate - Static date to display on the clock which will disable clock's auto-update
 * @param {string} customBg - Custom background image for the clock which will replace the default svg backgrounds
 */
export declare const AnalogClock: FC<AnalogClockProps>;

import React, { FC, useEffect, useState } from "react";
import "./AnalogClock.css";
import dotsBg from "./assets/dots.svg";
import numbersBg from "./assets/numbers.svg";
import { AnalogClockProps } from "./analogClockTypes";
import { getClockRotation } from "./utils";


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
const AnalogClock: FC<AnalogClockProps> = ({
  showMinuteHand = true,
  showSecondHand = true,
  showBorder = true,
  showHandBase = true,
  smooth = false,
  whiteNumbers = false,
  square = false,
  numbersType = "numbers",
  borderColor = "#000000",
  handBaseColor = "#000000",
  handColor = { hour: "#000000", minute: "#000000", second: "#e74c3c" },
  handLength = { hour: "65px", minute: "90px", second: "90px" },
  size = "200px",
  backgroundColor = "#ffffff",
  staticDate,
  customBg,
}) => {
  // Define state for current date and a function to update it
  const [currentDate, setCurrentDate] = useState(staticDate || new Date());

  // Calculate clock rotations based on the current date
  const rotations = getClockRotation(currentDate);

  // Update the current date at regular intervals
  useEffect(() => {
    if (!staticDate) {
      const intervalTime = showSecondHand
        ? 1000
        : showMinuteHand
        ? 1000 * 60
        : 1000 * 3600;
      const interval = setInterval(
        () => setCurrentDate(new Date()),
        intervalTime
      );
      return () => clearInterval(interval);
    }
  }, [staticDate, showMinuteHand, showSecondHand]);

  // Get the background image for the clock
  function getBackground() {
    return customBg || (numbersType === "dots" ? dotsBg : numbersBg);
  }

  // Get styles for the clock
  function getClockStyles() {
    return {
      border: showBorder ? `2px solid ${borderColor}` : "none",
      width: size,
      height: size,
      backgroundColor: backgroundColor,
      borderRadius: square ? "5%" : "50%",
    };
  }

  // Get dynamic styles for the clock hands
  function getHandsDynamicStyles(hand: "hour" | "minute" | "second") {
    return {
      backgroundColor: handColor[hand],
      width: handLength[hand],
      transform: `rotate(${rotations[hand]}deg)`,
      transition: smooth ? "transform 0.3s ease" : "none",
    };
  }

  // Render the AnalogClock component
  return (
    <div className="analog-clock" style={getClockStyles()}>
      <img
        className="analog-clock-bg"
        src={getBackground()}
        alt="background"
        style={{
          filter: whiteNumbers ? "invert(100%)" : "none",
        }}
      />{" "}
      {showHandBase && (
        <div className="analog-clock-handbase" style={{ color: handBaseColor }}>
          ●
        </div>
      )}
      {showSecondHand && (
        <div
          className="analog-clock-second"
          style={getHandsDynamicStyles("second")}
        ></div>
      )}
      {showMinuteHand && (
        <div
          className="analog-clock-minute"
          style={getHandsDynamicStyles("minute")}
        ></div>
      )}
      <div
        className="analog-clock-hour"
        style={getHandsDynamicStyles("hour")}
      ></div>
    </div>
  );
};

export default AnalogClock;

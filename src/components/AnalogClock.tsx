import React, { FC, useEffect, useState } from "react";
import "./AnalogClock.css";
import dotsBg from "./assets/dots.svg";
import numbersBg from "./assets/numbers.svg";
import { AnalogClockProps } from "./analogClockTypes";
import { getClockRotation } from "./utils";

const AnalogClock: FC<AnalogClockProps> = ({
  showminuteHand = true,
  showSecondHand = true,
  showBorder = true,
  showHandBase = true,
  smooth = false,
  whiteNumbers = false,
  square= false,
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
  const [date, setDate] = useState(staticDate || new Date());

  const rotations = getClockRotation(date);

  useEffect(() => {
    if (!staticDate) {
      const intervalTime = showSecondHand
        ? 1000
        : showminuteHand
        ? 1000 * 60
        : 1000 * 3600;
      const interval = setInterval(() => setDate(new Date()), intervalTime);
      return () => clearInterval(interval);
    }
  }, [staticDate, showminuteHand, showSecondHand]);

  function getBackground() {
    if (customBg) {
      return customBg;
    }

    return numbersType === "dots" ? dotsBg : numbersBg;
  }

  function getClockStyles(){
    return {
      border: showBorder ? `2px solid ${borderColor}` : "none",
      width: size,
      height: size,
      backgroundColor: backgroundColor,
      borderRadius: square ? "5%" : "50%"
    }
  }

  function getHandsDynamicStyles(hand: "hour" | "minute" | "second"){
    return {
      backgroundColor: handColor[hand],
      width: handLength[hand],
      transform: `rotate(${rotations[hand]}deg)`,
      transition: smooth ? "transform 0.3s ease" : "none",
    }
  }

  return (
    <div
      className="analog-clock"
      style={getClockStyles()}
    >
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
      {showminuteHand && (
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

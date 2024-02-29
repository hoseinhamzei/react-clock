import React, { FC, useEffect, useState } from "react";
import "./AnalogClock.css";
import dotsBg from "./assets/dots.svg";
import numbersBg from "./assets/numbers.svg";
import { AnalogClockProps } from "./analogClockTypes";
import { getClockRotation } from "./utils";

const AnalogClock: FC<AnalogClockProps> = ({
  showMiniuteHand = true,
  showSecondHand = true,
  showBorder = true,
  showHandBase = true,
  smoothSeconds = false,
  whiteNumbers = false,
  numbersType = "numbers",
  borderColor = "#000000",
  handBaseColor = "#000000",
  handColor = { hour: "#000000", miniute: "#000000", second: "#e74c3c" },
  handLength = { hour: "70px", miniute: "90px", second: "90px" },
  size = "200px",
  backgroundColor = "#ffffff",
  staticDate,
}) => {
  const [date, setDate] = useState(staticDate || new Date());

  const rotations = getClockRotation(date);

  useEffect(() => {
    if (!staticDate) {
      const intervalTime = showSecondHand
        ? 1000
        : showMiniuteHand
        ? 1000 * 60
        : 1000 * 3600;
      const interval = setInterval(() => setDate(new Date()), intervalTime);
      return () => clearInterval(interval);
    }
  }, [staticDate, showMiniuteHand, showSecondHand]);

  return (
    <div
      className="analog-clock"
      style={{
        border: showBorder ? `2px solid ${borderColor}` : "none",
        width: size,
        height: size,
        backgroundColor: backgroundColor
      }}
    >
      <img className="analog-clock-bg" src={numbersType === "dots" ? dotsBg : numbersBg } style={{
        filter: whiteNumbers ? "invert(100%)" : "none"
      }} />
      {" "}
      {showHandBase && (
        <div className="analog-clock-handbase" style={{ color: handBaseColor }}>
          ●
        </div>
      )}
      {showSecondHand && (
        <div
          className="analog-clock-second"
          style={{
            backgroundColor: handColor.second,
            width: handLength.second,
            left: `50%`,
            transform: `rotate(${rotations.seconds}deg)`,
            transition: smoothSeconds ? "transform 0.3s ease" : "none",
          }}
        ></div>
      )}
      {showMiniuteHand && (
        <div
          className="analog-clock-minute"
          style={{
            backgroundColor: handColor.miniute,
            width: handLength.miniute,
            left: `50%`,
            transform: `rotate(${rotations.minutes}deg)`,
          }}
        ></div>
      )}
      <div
        className="analog-clock-hour"
        style={{
          backgroundColor: handColor.hour,
          width: handLength.hour,
          left: `50%`,
          transform: `rotate(${rotations.hours}deg)`,
        }}
      ></div>
    </div>
  );
};
export default AnalogClock;

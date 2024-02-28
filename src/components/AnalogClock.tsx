import React, { FC, ReactElement } from "react";
import "./AnalogClock.css";
import { AnalogClockProps } from "./analogClockTypes";
const AnalogClock: FC<AnalogClockProps> = ({
  showMiniuteHand = true,
  showSecondHand = true,
  showBorder = true,
  showHandBase = true,
  numbersType = "numbers",
  borderColor = "#000000",
  numbersColor = "#000000",
  handBaseColor = "#000000",
  handColor = { hour: "#000000", miniute: "#000000", second: "#e74c3c" },
  handLength = { hour: "70px", miniute: "100px", second: "100px" },
  size = "200px",
}) => {

  const numberElements: ReactElement[] = new Array(12)
    .fill("")
    .map((_, index) => (
      <span
        className="analog-clock-number"
        id={`analog-clock-number-${index}`}
        style={{ color: numbersColor }}
      >
        {" "}
        {numbersType === "numbers" ? index + 1 : "."}{" "}
      </span>
    ));
  return (
    <div
      className="analog-clock"
      style={{
        border: showBorder ? `2px solid ${borderColor}` : "none",
        width: size,
        height: size,
      }}
    >
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
            display: "none",
          }}
        ></div>
      )}
      {showMiniuteHand && (
        <div
          className="analog-clock-minute"
          style={{
            backgroundColor: handColor.miniute,
            width: handLength.miniute,
            display: "none",
          }}
        ></div>
      )}
      <div
        className="analog-clock-hour"
        style={{
          backgroundColor: handColor.hour,
          width: handLength.hour,
          left: `calc(${size}/1.5 - ${handLength.hour}/7)`,
        }}
      ></div>
      <div className="analog-clock-numbers"> {numberElements} </div>{" "}
    </div>
  );
};
export default AnalogClock;

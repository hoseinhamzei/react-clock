import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import "./AnalogClock.css";
import dotsBg from "./assets/dots.svg";
import numbersBg from "./assets/numbers.svg";
import numbersAltBg from "./assets/numbers-alt.svg";
import linesBg from "./assets/lines.svg";
import romanBg from "./assets/roman.svg";
import { getClockRotation } from "./utils";
import ClockHand from "./ClockHand";
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
export var AnalogClock = function (_a) {
    var _b = _a.showMinuteHand, showMinuteHand = _b === void 0 ? true : _b, _c = _a.showSecondHand, showSecondHand = _c === void 0 ? true : _c, _d = _a.showBorder, showBorder = _d === void 0 ? true : _d, _e = _a.showHandBase, showHandBase = _e === void 0 ? true : _e, _f = _a.smooth, smooth = _f === void 0 ? false : _f, _g = _a.whiteNumbers, whiteNumbers = _g === void 0 ? false : _g, _h = _a.square, square = _h === void 0 ? false : _h, _j = _a.numbersType, numbersType = _j === void 0 ? "numbersAndLines" : _j, _k = _a.borderColor, borderColor = _k === void 0 ? "#000000" : _k, _l = _a.handBaseColor, handBaseColor = _l === void 0 ? "#000000" : _l, _m = _a.handColor, handColor = _m === void 0 ? { hour: "#000000", minute: "#000000", second: "#e74c3c" } : _m, _o = _a.handLength, handLength = _o === void 0 ? { hour: "65px", minute: "90px", second: "90px" } : _o, _p = _a.handThickness, handThickness = _p === void 0 ? { hour: "2px", minute: "2px", second: "2px" } : _p, _q = _a.size, size = _q === void 0 ? "200px" : _q, _r = _a.backgroundColor, backgroundColor = _r === void 0 ? "#ffffff" : _r, staticDate = _a.staticDate, customBg = _a.customBg;
    // Define state for current date and a function to update it
    var _s = useState(staticDate || new Date()), currentDate = _s[0], setCurrentDate = _s[1];
    // Update the current date at regular intervals
    useEffect(function () {
        if (!staticDate) {
            var intervalTime = showSecondHand
                ? 1000
                : showMinuteHand
                    ? 1000 * 60
                    : 1000 * 3600;
            var interval_1 = setInterval(function () { return setCurrentDate(new Date()); }, intervalTime);
            return function () { return clearInterval(interval_1); };
        }
    }, [staticDate, showMinuteHand, showSecondHand]);
    // Calculate clock rotations based on the current date
    var rotations = getClockRotation(currentDate);
    // Get the background image for the clock
    var backgroundImageSrc = {
        numbers: numbersBg,
        dots: dotsBg,
        numbersAndLines: numbersAltBg,
        lines: linesBg,
        roman: romanBg,
    };
    // derived styles for the clock
    var clockStyle = {
        border: showBorder ? "2px solid ".concat(borderColor) : "none",
        width: size,
        height: size,
        backgroundColor: backgroundColor,
        borderRadius: square ? "5%" : "50%",
    };
    var fullWidthNumberTypes = ["numbersAndLines", "lines", "roman"];
    var bgStyle = {
        filter: whiteNumbers ? "invert(100%)" : "none",
        width: fullWidthNumberTypes.includes(numbersType) || customBg ? "100%" : "90%",
        height: fullWidthNumberTypes.includes(numbersType) || customBg ? "100%" : "90%",
    };
    var handStyle = {
        color: handBaseColor,
    };
    return (_jsxs("div", { className: "analog-clock", style: clockStyle, children: [_jsx("img", { className: "analog-clock-bg", src: customBg || backgroundImageSrc[numbersType], alt: "background", style: bgStyle }), showHandBase && (_jsx("div", { className: "analog-clock-hand_base", style: handStyle, children: "\u25CF" })), _jsx(ClockHand, { rotation: rotations.second, color: handColor.second, length: handLength.second, smooth: smooth, visible: showSecondHand, thickness: handThickness.second }), _jsx(ClockHand, { rotation: rotations.minute, color: handColor.minute, length: handLength.minute, smooth: smooth, visible: showMinuteHand, thickness: handThickness.minute }), _jsx(ClockHand, { rotation: rotations.hour, color: handColor.hour, length: handLength.hour, thickness: handThickness.hour, smooth: smooth })] }));
};

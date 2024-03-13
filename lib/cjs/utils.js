"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClockRotation = void 0;
/**
 * Calculates the rotation for the second, minute, and hour hands of a clock based on the given date.
 * @param date - The date object to calculate the rotation for.
 * @returns An object containing the rotation for the second, minute, and hour hands.
 */
function getClockRotation(date) {
    // Calculate the rotation for the second, minute and hour hand, subtracting 90 to align with the 12 o'clock position
    var second = date.getSeconds() * 6 - 90;
    var minute = date.getMinutes() * 6 - 90;
    var hour = (date.getHours() % 12) * 30 + date.getMinutes() / 2 - 90;
    return {
        second: second,
        minute: minute,
        hour: hour
    };
}
exports.getClockRotation = getClockRotation;

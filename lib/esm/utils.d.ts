/**
 * Calculates the rotation for the second, minute, and hour hands of a clock based on the given date.
 * @param date - The date object to calculate the rotation for.
 * @returns An object containing the rotation for the second, minute, and hour hands.
 */
export declare function getClockRotation(date: Date): {
    second: number;
    minute: number;
    hour: number;
};

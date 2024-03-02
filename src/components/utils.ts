/**
 * Calculates the rotation for the second, minute, and hour hands of a clock based on the given date.
 * @param date - The date object to calculate the rotation for.
 * @returns An object containing the rotation for the second, minute, and hour hands.
 */
export function getClockRotation(date: Date) {
    // Calculate the rotation for the second, minute and hour hand, subtracting 90 to align with the 12 o'clock position
    const second = date.getSeconds() * 6 - 90; 
    const minute = date.getMinutes() * 6 - 90;
    const hour = (date.getHours() % 12) * 30 + date.getMinutes() / 2 - 90; 
  
    return {
      second,
      minute,
      hour
    };
}
/**
 * Calculates the rotation for the second, minute, and hour hands of a clock based on the given date.
 * @param date - The date object to calculate the rotation for.
 * @returns An object containing the rotation for the second, minute, and hour hands.
 */
export function getClockRotation(date: Date) {
    // Calculate the rotation for the second hand
    const seconds = date.getSeconds() * 6 - 90; // 360 degrees in a full circle divided by 60 seconds, subtracting 90 to align with the 12 o'clock position
    
    // Calculate the rotation for the minute hand
    const minutes = date.getMinutes() * 6 - 90; // 360 degrees in a full circle divided by 60 minutes, subtracting 90 to align with the 12 o'clock position
    
    // Calculate the rotation for the hour hand
    const hours = (date.getHours() % 12) * 30 + date.getMinutes() / 2 - 90; // 360 degrees in a full circle divided by 12 hours, subtracting 90 to align with the 12 o'clock position
  
    return {
      second: seconds,
      minute: minutes,
      hour: hours
    };
}
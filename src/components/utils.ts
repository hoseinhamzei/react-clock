export function getClockRotation(date: Date) {
    const seconds = date.getSeconds() * 6; // 360 degrees in a full circle divided by 60 seconds
    const minutes = date.getMinutes() * 6; // 360 degrees in a full circle divided by 60 minutes
    const hours = (date.getHours() % 12) * 30 + date.getMinutes() / 2; // 360 degrees in a full circle divided by 12 hours
  
    return {
      second: seconds - 90,
      minute: minutes - 90,
      hour: hours - 90
    };
  }
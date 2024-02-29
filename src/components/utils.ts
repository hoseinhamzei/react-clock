export function getClockRotation(date: Date) {
    const seconds = date.getSeconds() * 6; // 360 degrees in a full circle divided by 60 seconds
    const minutes = date.getMinutes() * 6; // 360 degrees in a full circle divided by 60 minutes
    const hours = (date.getHours() % 12) * 30 + date.getMinutes() / 2; // 360 degrees in a full circle divided by 12 hours
  
    return {
      seconds: seconds - 90,
      minutes: minutes - 90,
      hours: hours - 90
    };
  }
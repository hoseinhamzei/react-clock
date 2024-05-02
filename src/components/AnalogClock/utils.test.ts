import { getClockRotation } from "./utils";

test('It calculates correct clock rotations for 9:25', () => {
    const date = new Date(); date.setHours(9); date.setMinutes(25); date.setSeconds(0);
    const rotation = getClockRotation(date);

    expect(rotation.second).toBe(-90);
    expect(rotation.minute).toBe(60);
    expect(rotation.hour).toBe(192.5);
});
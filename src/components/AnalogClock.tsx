import React, { FC } from 'react';

interface AnalogClockProps {
  showSecondHand: boolean;
  showMiniuteHand: boolean;
  showHourHand: boolean;
  numbersType: 'numbers' | 'dots';
}

const AnalogClock: FC<AnalogClockProps> = ({
  showHourHand = true,
  showMiniuteHand = true,
  showSecondHand = true,
  numbersType = 'numbers',
}) => {
  const numberElements: Array<string> = new Array(12)
    .fill('')
    .map((_, index) => (
      <span className="analog-clock-numbers">
        ${numbersType === 'numbers' ? index + 1 : '.'}
      </span>
    ));

  return <div className="analog-clock"></div>;
};

export default AnalogClock;

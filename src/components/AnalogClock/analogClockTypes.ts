export interface HandPropType {
  hour: string;
  minute: string;
  second: string;
}
export interface AnalogClockProps {
  showSecondHand?: boolean;
  showMinuteHand?: boolean;
  showBorder?: boolean;
  showHandBase?: boolean;
  smooth?: boolean;
  whiteNumbers?: boolean;
  square?: boolean;
  numbersType?: "numbers" | "dots" | "numbersAndLines" | "lines" | "roman";
  borderColor?: string;
  backgroundColor?: string;
  handColor?: HandPropType;
  handLength?: HandPropType;
  handThickness?: HandPropType;
  handBaseColor?: string;
  size?: string;
  staticDate?: Date;
  customBg?: string;
}

export interface ClockHandProps {
  rotation: number;
  color: string;
  length: string;
  thickness: string;
  visible?: boolean;
  smooth?: boolean;
}

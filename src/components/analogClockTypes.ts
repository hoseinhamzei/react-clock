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
  numbersType?: "numbers" | "dots";
  borderColor?: string;
  backgroundColor?: string;
  handColor?: HandPropType;
  handLength?: HandPropType;
  handBaseColor?: string;
  size?: string;
  staticDate?: Date;
  customBg?: string;
}

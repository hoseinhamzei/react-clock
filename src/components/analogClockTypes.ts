export interface HandPropType {
  hour: string;
  miniute: string;
  second: string;
}
export interface AnalogClockProps {
  showSecondHand?: boolean;
  showMiniuteHand?: boolean;
  showBorder?: boolean;
  showHandBase?: boolean;
  smoothSeconds?: boolean;
  whiteNumbers?: boolean;
  numbersType?: "numbers" | "dots";
  borderColor?: string;
  backgroundColor?: string;
  handColor?: HandPropType;
  handLength?: HandPropType;
  handBaseColor?: string;
  size?: string;
  staticDate?: Date;
}

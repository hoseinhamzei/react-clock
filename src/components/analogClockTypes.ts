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
  numbersType?: "numbers" | "dots";
  borderColor?: string;
  handColor?: HandPropType;
  handLength?: HandPropType;
  numbersColor?: string;
  handBaseColor?: string;
  size?: string;
}


# React Analog Clock Component

![NPM Downloads](https://img.shields.io/npm/dt/%40angular%2Freact-analog-clock)
![NPM License](https://img.shields.io/npm/l/%40hoseinh%2Freact-analog-clock)

![](https://www.hoseinh.com/wp-content/uploads/2024/03/1.jpg)

React Analog Clock is a customizable React component that displays an analog clock with various options for customization.

Check out the [online demo](https://hoseinh.com/demos/analog-clock) For Examples.

## Installation

You can install the `@hoseinh/react-analog-clock` package via npm:

```bash
npm install @hoseinh/react-analog-clock
```

## Usage

All props for the AnalogClock component are completely optional, empowering users to tailor the clock's appearance and behavior to their specific preferences. The package offers a selection of five distinct clock faces through the "numbersType" prop (refer to the props table), while also providing the flexibility to define a completely custom clock face using the "customBg" prop.

```javascript
import React from 'react';
import { AnalogClock } from '@hoseinh/react-analog-clock';

const MyClock = () => {
  return (
    <AnalogClock
      showMinuteHand={true}
      showSecondHand={true}
      showBorder={true}
      showHandBase={true}
      smooth={false}
      whiteNumbers={false}
      square={false}
      numbersType="numbersAndLines"
      borderColor="#000000"
      handBaseColor="#000000"
      handColor={{ hour: "#000000", minute: "#000000", second: "#e74c3c" }}
      handLength={{ hour: "65px", minute: "90px", second: "90px" }}
      handThickness={{ hour: "2px", minute: "2px", second: "2px" }}
      size="200px"
      backgroundColor="#ffffff"
    />
  );
};

export default MyClock;
```

## Props

| Prop              | Description                                                        | Options                                    | Default Value  |
|-------------------|--------------------------------------------------------------------|--------------------------------------------|----------------|
| `showMinuteHand`  | Whether to show the minute hand                                    | `true`, `false`                           | `true`         |
| `showSecondHand`  | Whether to show the second hand                                    | `true`, `false`                           | `true`         |
| `showBorder`      | Whether to show the clock border                                    | `true`, `false`                           | `true`         |
| `showHandBase`    | Whether to show the hand base                                       | `true`, `false`                           | `true`         |
| `smooth`          | Whether to smoothly transition the hand movement                    | `true`, `false`                           | `false`        |
| `whiteNumbers`    | Whether to display white numbers on the clock face                  | `true`, `false`                           | `false`        |
| `square`          | Whether the clock should be square                                  | `true`, `false`                           | `false`        |
| `numbersType`     | Type of numbers to display on the clock face                        | "numbers", "dots", "numbersAndLines", "lines", "roman" | "numbersAndLines" |
| `borderColor`     | Color of the clock border                                           | Any valid CSS color value                  | `#000000`      |
| `backgroundColor` | Background color of the clock                                       | Any valid CSS color value                  | `#ffffff`      |
| `handColor`       | Object containing colors for each hand (hour, minute, second)       | -                                          | `{ hour: "#000000", minute: "#000000", second: "#e74c3c" }` |
| `handLength`      | Object containing lengths for each hand (hour, minute, second)      | -                                          | `{ hour: "65px", minute: "90px", second: "90px" }` |
| `handThickness`   | Object containing thickness for each hand (hour, minute, second)    | -                                          | `{ hour: "2px", minute: "2px", second: "2px" }` |
| `handBaseColor`   | Color of the hand base                                              | Any valid CSS color value                  | `#000000`      |
| `size`            | Size of the clock                                                   | Any valid CSS size value                   | `200px`        |
| `staticDate`      | Static date to display on the clock which will disable clock's auto-update | Date object                             | -              |
| `customBg`        | Custom background image for the clock which will replace the default backgrounds | URL to image file                      | -              |

## License

This project is licensed under the MIT License.

import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AnalogClock } from "./AnalogClock";

describe("AnalogClock component", () => {
    test("renders with no props", () => {
        const { container } = render(<AnalogClock />);

        screen.debug();

        const analogClock = container.querySelector(".analog-clock");

        expect(analogClock).toBeInTheDocument();
    });

    test('renders AnalogClock component with custom props', () => {
        const customProps = {
            showMinuteHand: false,
            showSecondHand: false,
            showBorder: false,
            showHandBase: false,
            smooth: true,
            whiteNumbers: true,
            square: true,
            borderColor: '#333333',
            handBaseColor: '#555555',
            handColor: { hour: '#888888', minute: '#999999', second: '#aaaaaa' },
            handLength: { hour: '70px', minute: '95px', second: '95px' },
            handThickness: { hour: '3px', minute: '3px', second: '3px' },
            size: '250px',
            backgroundColor: '#eeeeee',
            staticDate: new Date(2022, 0, 1, 12, 30, 0),
            customBg: 'custom-bg.png',
        };

        render(<AnalogClock {...customProps} />);
        expect(document.querySelector('.analog-clock')).toBeInTheDocument();
        expect(document.querySelector('.analog-clock-bg')).toHaveAttribute('src', 'custom-bg.png');
    });
})


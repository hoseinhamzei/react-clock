// ClockHand.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import ClockHand from './ClockHand';
import "@testing-library/jest-dom";

describe('ClockHand component', () => {
  test('renders correctly with default props', () => {
    const { container } = render(<ClockHand rotation={90} color="black" length="100px" thickness="2px" />);
    const clockHand = container.querySelector('.analog-clock-hand');

    expect(clockHand).toBeInTheDocument();
    expect(clockHand).toHaveStyle({ backgroundColor: 'black', width: '100px', transform: 'rotate(90deg)' });
  });

  test('does not render when visible is false', () => {
    const { container } = render(<ClockHand rotation={90} color="black" length="100px" visible={false} thickness="2px" />);
    const clockHand = container.querySelector('.analog-clock-hand');

    expect(clockHand).toBeNull();
  });

  test('applies smooth transition when smooth prop is true', () => {
    const { container } = render(<ClockHand rotation={90} color="black" length="100px" smooth={true} thickness="2px" />);
    const clockHand = container.querySelector('.analog-clock-hand');

    expect(clockHand).toHaveStyle({ transition: 'transform 0.3s ease' });
  });

  test('applies thickness style', () => {
    const { container } = render(<ClockHand rotation={90} color="black" length="100px" thickness="2px" />);
    const clockHand = container.querySelector('.analog-clock-hand');

    expect(clockHand).toHaveStyle({ height: '2px' });

  });
});

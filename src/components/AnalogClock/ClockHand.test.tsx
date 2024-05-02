// ClockHand.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import ClockHand from './ClockHand';

describe('ClockHand component', () => {
  test('renders correctly with default props', () => {
    const { container } = render(<ClockHand rotation={90} color="black" length={100} />);
    const clockHand = container.querySelector('.analog-clock-hand');
    
    expect(clockHand).toBeDefined();
    expect(clockHand).toHaveStyle({ backgroundColor: 'black', width: '100px', transform: 'rotate(90deg)' });
  });

  test('does not render when visible is false', () => {
    const { container } = render(<ClockHand rotation={90} color="black" length={100} visible={false} />);
    const clockHand = container.querySelector('.analog-clock-hand');
    
    expect(clockHand).toBeNull();
  });

  test('applies smooth transition when smooth prop is true', () => {
    const { container } = render(<ClockHand rotation={90} color="black" length={100} smooth={true} />);
    const clockHand = container.querySelector('.analog-clock-hand');
    
    expect(clockHand).toHaveStyle({ transition: 'transform 0.3s ease' });
  });

  test('applies thickness style if thickness prop is provided', () => {
    const { container } = render(<ClockHand rotation={90} color="black" length={100} thickness={5} />);
    const clockHand = container.querySelector('.analog-clock-hand');
    
    expect(clockHand).toHaveStyle({ height: '5px' });
  });
});

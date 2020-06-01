/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Step from '../Step';

describe('<Step/> component', () => {
  const text = 'Test';

  test('should render text', () => {
    render(<Step text={text} isLast={false} isCurrent isNext={false} isDone={false} />);
    expect(screen.getByText(text)).not.toBeNull();
  });

  test('should match snapshot', () => {
    const { container } = render(<Step text={text} isLast={false} isCurrent isNext={false} isDone={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

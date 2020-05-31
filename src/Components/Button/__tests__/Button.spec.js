/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from '../Button';

describe('<Button /> component', () => {
  const type = 'primary-default-large';
  const children = 'Button text';

  test('should display the text', () => {
    render(<Button type={type}>{children}</Button>);
    expect(screen.queryByText(children)).not.toBeNull();
  });

  test('should call onClick callback', () => {
    const handleClick = jest.fn();
    render(<Button type={type} onClick={handleClick}>{children}</Button>);
    fireEvent.click(screen.getByText(children));
    expect(handleClick).toBeCalled();
  });
});

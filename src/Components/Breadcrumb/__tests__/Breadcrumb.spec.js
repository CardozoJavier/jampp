/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Breadcrumb from '../Breadcrumb';

describe('<Breadcrumb/> component', () => {
  const children = [
    <div key="key1" text="text 1" className="testing-length" />,
    <div key="key2" text="text 2" className="testing-length" />,
    <div key="key3" text="text 3" className="testing-length" />,
    <div key="key4" text="text 4" className="testing-length" />,
  ];
  test('should render children', () => {
    render(<Breadcrumb>{children}</Breadcrumb>);
    expect(screen.getAllByText(/text/)).toHaveLength(children.length);
  });

  test('should match snapshot', () => {
    const { container } = render(<Breadcrumb>{children}</Breadcrumb>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

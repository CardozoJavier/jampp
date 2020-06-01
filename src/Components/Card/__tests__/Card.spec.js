/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card';

describe('<Card/> component', () => {
  const title = 'Test title';
  const description = 'Test long description';
  const paragraph = 'Paragraph element like children prop';
  const children = <p>{paragraph}</p>;

  test('should render title', () => {
    render(<Card title={title} />);
    expect(screen.getByText(title)).not.toBeNull();
  });

  test('should render description', () => {
    render(<Card title={title} description={description} />);
    expect(screen.getByText(description)).not.toBeNull();
  });

  test('not should render title neither description', () => {
    render(<Card />);
    expect(screen.queryByText(title)).toBeNull();
    expect(screen.queryByText(description)).toBeNull();
  });

  test('should render children', () => {
    render(<Card>{children}</Card>);
    expect(screen.getByText(paragraph)).not.toBeNull();
  });

  test('should match snapshot', () => {
    const { container } = render(<Card title={title} description={description}>{children}</Card>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

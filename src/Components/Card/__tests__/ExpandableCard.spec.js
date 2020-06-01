/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ExpandableCard from '../ExpandableCard';

describe('<ExpandableCard/> component', () => {
  const title = 'Test title';
  const description = 'Test long description';

  test('should render title', () => {
    render(<ExpandableCard title={title} />);
    expect(screen.getByText(title)).not.toBeNull();
  });

  test('should render description', () => {
    render(<ExpandableCard title={title} description={description} />);
    expect(screen.getByText(description)).not.toBeNull();
  });
});

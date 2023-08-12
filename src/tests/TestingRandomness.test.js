import React from 'react';
import { render } from '@testing-library/react';
import TestingRandomnessPage from '../pages/testing_randomness';

test('renders Testing Randomness text', () => {
  const { getByText } = render(<TestingRandomnessPage />);
  const testingRandomnessText = getByText(/Testing Randomness/i);
  expect(testingRandomnessText).toBeInTheDocument();
});
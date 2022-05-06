import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { Square } from 'playground/components/Square';

test('renders correctly', () => {
  const { toJSON } = render(<Square />);
  expect(toJSON()).toMatchSnapshot();
});

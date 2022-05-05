import React from 'react';
import renderer from 'react-test-renderer';
import { Square } from '../src/playground/components/Square';

test('renders correctly', () => {
  const tree = renderer.create(<Square />).toJSON();
  expect(tree).toMatchSnapshot();
});

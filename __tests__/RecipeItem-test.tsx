import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { RecipeItem } from '../src/recipes/components/RecipeItem';

test('renders correctly', () => {
  const { toJSON } = render(
    <RecipeItem
      name="Hello"
      imageUrl="https://reactnative.dev/img/tiny_logo.png"
      category="test"
    />,
  );
  expect(toJSON()).toMatchSnapshot();
});

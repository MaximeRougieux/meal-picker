import React from 'react';
import renderer from 'react-test-renderer';
import { RecipeItem } from '../src/recipes/components/RecipeItem';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <RecipeItem
        name="Hello"
        imageUrl="https://reactnative.dev/img/tiny_logo.png"
        category="test"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

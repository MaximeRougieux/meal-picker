import React from 'react';
import renderer from 'react-test-renderer';
import { RecipeList } from '../src/recipes/screens/RecipeList';

test('renders correctly', () => {
  const tree = renderer.create(<RecipeList />).toJSON();
  expect(tree).toMatchSnapshot();
});

import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { RecipeDetails } from 'recipes/screens/RecipeDetails';

test('renders correctly', () => {
  const mockedMeal = {
    idMeal: '52929',
    strMeal: 'Timbits',
    strCategory: 'Dessert',
    strInstructions:
      'Sift together dry ingredients.\r\nMix together wet ingredients and incorporate into dry. Stir until smooth.\r\nDrop by teaspoonfuls(no bigger) into hot oil (365 degrees, no hotter), turning after a few moments until golden brown on all sides.\r\nRemove and drain.\r\nRoll in cinnamon sugar while still warm and serve.',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg',
  };
  const route: any = {
    params: { meal: mockedMeal },
  };
  const navigation: any = {};
  const { toJSON } = render(
    <RecipeDetails route={route} navigation={navigation} />,
  );
  expect(toJSON()).toMatchSnapshot();
});

import React from 'react';
import nock from 'nock';
import { RecipeList } from '../src/recipes/screens/RecipeList';
import {
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';

test('renders correctly', async () => {
  nock('https://www.themealdb.com/api/json/v1/1')
    .get('/search.php?s=soup')
    .reply(200, {
      meals: [
        {
          idMeal: '52771',
          strMeal: 'Spicy Arrabiata Penne',
          strCategory: 'Vegetarian',
          strMealThumb:
            'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
        },
      ],
    });
  const { queryByTestId, toJSON } = render(<RecipeList keyword="soup" />);
  await waitForElementToBeRemoved(() => queryByTestId('loading'));
  expect(toJSON()).toMatchSnapshot();
});

import React from 'react';
import nock from 'nock';
import { RecipeList } from 'recipes/screens/RecipeList';
import {
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';

test('renders correctly', async () => {
  nock('https://www.themealdb.com/api/json/v1/1')
    .get('/search.php?s=')
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
  const route: any = {};
  const navigation: any = {};
  const { getByTestId, toJSON, getByText } = render(
    <RecipeList route={route} navigation={navigation} />,
  );
  await waitForElementToBeRemoved(() => getByTestId('loading'));
  expect(getByText('Spicy Arrabiata Penne')).toBeTruthy();
  expect(toJSON()).toMatchSnapshot();
});

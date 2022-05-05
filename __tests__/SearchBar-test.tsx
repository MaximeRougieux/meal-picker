import 'react-native';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SearchBar from '../src/recipes/components/SearchBar';

test('renders correctly', async () => {
  const setKeyword = jest.fn();

  const { toJSON, queryByTestId, queryByDisplayValue } = render(
    <SearchBar setKeyword={setKeyword} />,
  );

  fireEvent.changeText(queryByTestId('searchbar')!, 'testtext');
  await waitFor(() => queryByDisplayValue('testtext'));
  expect(toJSON()).toMatchSnapshot();
});

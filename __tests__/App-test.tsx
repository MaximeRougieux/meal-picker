/**
 * @format
 */

import React from 'react';
import App from '../App';
import nock from 'nock';

// Note: test renderer must be required after react-native.
import {
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';

it('renders correctly', async () => {
  nock.disableNetConnect();
  const { toJSON, queryByTestId } = render(<App />);
  await waitForElementToBeRemoved(() => queryByTestId('loading'));
  expect(toJSON()).toMatchSnapshot();
});

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
  const { toJSON, queryByHintText } = render(<App />);
  await waitForElementToBeRemoved(() => queryByHintText('loading'));
  expect(toJSON()).toMatchSnapshot();
});

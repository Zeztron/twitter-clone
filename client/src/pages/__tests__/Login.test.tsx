import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';
import Login from '../Login';

const setup = () =>
  shallow(
    <MockedProvider>
      <Login />
    </MockedProvider>
  );

describe('Login Page', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => (wrapper = setup()));

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});

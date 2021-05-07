import React from 'react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import { mount, ReactWrapper } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';
import Signup, { SIGNUP_MUTATION } from '../Signup';

const mockHistory = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistory,
  }),
}));

const mocks = [
  {
    request: {
      query: SIGNUP_MUTATION,
      variables: {
        name: 'SignupTest',
        email: 'signup@email.com',
        password: 'pass123',
      },
    },
    result: {
      data: {
        signup: { token: 'token' },
      },
    },
  },
];

const setup = () =>
  mount(
    <MemoryRouter>
      <MockedProvider mocks={mocks} addTypename={false}>
        <Signup />
      </MockedProvider>
    </MemoryRouter>
  );

describe('Signup Page', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => (wrapper = setup()));

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});

import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Signup from '../Signup';

const setup = () => shallow(<Signup />);

describe('Signup Page', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => (wrapper = setup()));

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});

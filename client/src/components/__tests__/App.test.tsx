import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from '../App';

const setup = () => shallow(<App />);

describe('<App />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => (wrapper = setup()));

  it('successfully renders App component', () => {
    expect(wrapper).toHaveLength(1);
  });
});

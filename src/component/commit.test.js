import React from 'react';
import { mount } from 'enzyme';
import Commit from '../component/commit'

describe('<Commit />', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<Commit username="velopert" name="김민준" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders username and name', () => {
    const wrapper = mount(<Commit username="velopert" name="김민준" />);
    expect(wrapper.props().username).toBe('velopert');
    expect(wrapper.props().name).toBe('김민준');
  });
});
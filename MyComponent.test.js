import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders without crashing', () => {
    shallow(<MyComponent />);
  });

  it('displays the correct text', () => {
    const wrapper = shallow(<MyComponent text="Hello, world!" />);
    const text = wrapper.find('p').text();
    expect(text).toEqual('Hello, world!');
  });

  it('calls the onClick function when the button is clicked', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<MyComponent onClick={onClick} />);
    wrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});

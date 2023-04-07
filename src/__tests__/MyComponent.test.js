import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MyComponent from '../MyComponent.test.js';
configure({ adapter: new Adapter() });
describe('MyComponent', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MyComponent.test.js />);
    expect(wrapper).toMatchSnapshot();
  });
});

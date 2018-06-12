const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
require('jest-enzyme');
const PinPadForm = require('../components/atoms/PinPadForm');

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

describe('PinPadForm', () => {
  it('should have form tag', () => {
    const component = shallow(<PinPadForm />);
    expect(component.find('div')).toBePresent();
  });
});

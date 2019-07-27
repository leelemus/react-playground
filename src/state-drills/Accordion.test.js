import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordion from "./Accordion";

const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
];

describe ('Accordion Component', () => {
    it('renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordion />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('render no section by default', () => {
        const wrapper = shallow(<Accordion sections={sections} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('opens correct section when clicked', () => {
        const wrapper = shallow(<Accordion sections={sections} />);
        wrapper.find('button').at(1).simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('only opens one sections at a time', () => {
        const wrapper = shallow(<Accordion section={sections} />);
        wrapper.find('p').at(1).simulate('click');
        wrapper.find('p').at(2).simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    });
})
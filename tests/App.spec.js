import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, assert, should } from 'chai';
import App from '../src/comps/App';
import Header from '../src/comps/Header';
import Scores from '../src/comps/Scores';
import Modes from '../src/comps/Modes';
import History from '../src/comps/History';

describe('<App />', () => {
    it('renders without problems', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).to.exist;
    });

    it('contains an <Header/> component', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find(Header)).to.have.length(1);
    });

    it('contains an <Scores/> component', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find(Scores)).to.have.length(1);
    });

    it('contains an <Modes/> component', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find(Modes)).to.have.length(1);
    });

    it('contains an <History/> component', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find(History)).to.have.length(1);
    });

    it('should have an initial games state', () => {
        const wrapper = mount(<App />);
        expect(wrapper.state().games).to.be.a('array');
    });
})

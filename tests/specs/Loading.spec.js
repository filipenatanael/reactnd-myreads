import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';

chai.use(chaiEnzyme);

import Loading from '../../src/components/utils/Loading';

describe('<Loading />', () => {
  it('should have <h2> tag when mount.', () => {
    const component = shallow(<Loading />);
    expect(component.find('h2')).to.have.length(1);
  });

  context('OnLoading', () => {
    it('should have an <h2> tag with [Loading...] content when message is not passed.', () => {
      const component = shallow(<Loading />);
      expect(component.find('h2').props().children).to.be.equal("Loading...");
    });

    it('hould have h1 tag with the message passed.', () => {
      const component = shallow(
      <Loading
        message="The component is loading, please wait!"
      />);
      expect(component.find('h2').props().children).to.be.equal("The component is loading, please wait!");
    });
  });
});

import ChatBox from './../../Components/ChatBoxStateless';
import React from 'react';
import { mount,shallow } from 'enzyme';
import 'jest-enzyme';

describe('Chat', () => {
      it('should be render when no props passed', () => {
        const wrapper = mount(<ChatBox />);
        expect(wrapper.find('Chat')).toBeDefined();
      });
      it('Header',() =>{
        const wrapper = mount(<ChatBox/>);
        expect(wrapper.find('Header')).toBeDefined();
      })
});
describe('ChatBox', () => {
  describe('exports', () => {
    it('should export a base component', () => {
      expect(ChatBox).toBeInstanceOf(Object);
    });
  });

  it('should be possible to create a component', () => {
    expect(mount(<ChatBox />)).not.toBe(undefined);
  });
});
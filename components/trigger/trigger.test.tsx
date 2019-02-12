import Enzyme from 'enzyme';
import Trigger from './Trigger';

const {
  shallow,
  mount,
} = Enzyme;

describe('test render', () => {
  it('test render', () => {
    const wrapper = shallow(
      <Trigger popup={<div>popup</div>}>
        {
          (ref) => <span ref={ref}>trigger</span>
        }
      </Trigger>,
      { disableLifecycleMethods: true }
    );
    
    expect(wrapper.find('span').html()).toBe('<span>trigger</span>');
  });
});

describe('test behave', () => {
  it('test trigger', () => {
    const wrapper = mount(
      <Trigger popup={<div>popup</div>}>
        {
          (ref) => <span ref={ref}>trigger</span>
        }
      </Trigger>,
    );
      
    expect(wrapper.state('showPop')).toBe(false);
    wrapper.simulate('mouseenter');
    setTimeout(() => {
      expect(wrapper.state('showPop')).toBe(true);
    }, 500);

    wrapper.simulate('mouseleave');
    setTimeout(() => {
      expect(wrapper.state('showPop')).toBe(false);
    }, 500);
  });
});

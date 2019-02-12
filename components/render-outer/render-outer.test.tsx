import Enzyme from 'enzyme';
import RenderOuter from './RenderOuter';

const { mount } = Enzyme;

describe('test render', () => {
  it('test render', () => {
    const wrapper = mount(
      <div>
        <RenderOuter>
          <span>test</span>
        </RenderOuter>
      </div>
    );

    expect(wrapper.find('span').exists()).toBe(true);
    wrapper.unmount();
    expect(wrapper.find('span').exists()).toBe(false);
  });
});

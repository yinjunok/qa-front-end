import Enzyme from 'enzyme';
import NoSsr from './NoSsr';

const { shallow } = Enzyme;

describe('server test', () => {
  it('return empty', () => {
    const wrapper = shallow(<NoSsr></NoSsr>, { disableLifecycleMethods: true });
    expect(wrapper.isEmptyRender()).toBe(true);
  })
});

describe('client test', () => {
  it('return something', () => {
    const wrapper = shallow(
      <NoSsr>
        <span>test</span>
      </NoSsr>
    );

    expect(wrapper.find('span').html()).toBe('<span>test</span>');
  });
});

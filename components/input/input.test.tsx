import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Input from './Input';

describe('snapshot', () => {
  test('no rightIcon', () => {
    const input = renderer.create(<Input />);
    expect(input.toJSON()).toMatchSnapshot();
  });

  test('right Icon', () => {
    const input = renderer.create(<Input rightIcon={<button>按钮</button>} />);
    expect(input.toJSON()).toMatchSnapshot();
  });

  test('with className', () => {
    const input = renderer.create(<Input className='className' />);
    expect(input.toJSON()).toMatchSnapshot();
  });
});

describe('function call', () => {
  test('onFocus', () => {
    const onFocus = jest.fn();
    const input = mount(<Input onFocus={onFocus} />);
    input.find('input').simulate('focus', onFocus);
    expect(onFocus).toBeCalled();

    expect(input.state('isFocus')).toBe(true);
  });

  test('onBlur', () => {
    const cb = jest.fn();
    const input = mount(<Input onFocus={cb} />);

    input.find('input').simulate('focus');
    input.find('input').simulate('blur', cb);
    expect(cb).toBeCalled();

    expect(input.state('isFocus')).toBe(false);
  });
});
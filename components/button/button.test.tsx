import renderer from 'react-test-renderer';
import Button from './Button';

describe('test snapshots', () => {
  test('primary button', () => {
    const btn = renderer.create(
      <Button type='primary'>按钮</Button>
    );
    expect(btn.toJSON()).toMatchSnapshot();
  });

  test('blue button', () => {
    const btn = renderer.create(
      <Button type='blue'>按钮</Button>
    );
    expect(btn.toJSON()).toMatchSnapshot();
  });

  test('grey button', () => {
    const btn = renderer.create(
      <Button type='grey'>按钮</Button>
    );
    expect(btn.toJSON()).toMatchSnapshot();
  });

  test('vote button', () => {
    const btn = renderer.create(
      <Button type='vote'>按钮</Button>
    );
    expect(btn.toJSON()).toMatchSnapshot();
  });
});

test('extra className', () => {
  const btn = renderer.create(
    <Button type='vote'>按钮</Button>
  );
  expect(btn.toJSON()).toMatchSnapshot();
});
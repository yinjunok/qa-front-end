import renderer from 'react-test-renderer';
import Sex from './Sex';

test('sex test', () => {
  const boy = renderer.create(
    <Sex sex='boy' />
  );

  expect(boy.toJSON()).toMatchSnapshot();

  const girl = renderer.create(
    <Sex sex='girl' />
  );

  expect(girl.toJSON()).toMatchSnapshot();

  const defaultSex = renderer.create(
    <Sex />
  );

  expect(defaultSex.toJSON()).toMatchSnapshot();
});

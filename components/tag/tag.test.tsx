import renderer from 'react-test-renderer';
import Tag from './Tag';

describe('test ui', () => {
  it('snapshoot', () => {
    const tag1 = renderer.create(
      <Tag>标签</Tag>
    );

    const tag2 = renderer.create(
      <Tag className='tag'>标签</Tag>
    );

    expect(tag1.toJSON()).toMatchSnapshot();
    expect(tag2.toJSON()).toMatchSnapshot();
  });
});

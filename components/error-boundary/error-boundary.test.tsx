import renderer from 'react-test-renderer';
import ErrorBoundary from './ErrorBoundary';

function TestCom({ error = true }) {
  if (error) {
    throw new Error('has error');
  }

  return <h1>no error</h1>
}

describe('test snapshots', () => {
  it('has error', () => {
    const com = renderer.create(
      <ErrorBoundary>
        <TestCom error={true} />
      </ErrorBoundary>
    );

    expect(com.toJSON()).toMatchSnapshot();
  });

  it('normal', () => {
    const com = renderer.create(
      <ErrorBoundary>
        <TestCom error={false} />
      </ErrorBoundary>
    );

    expect(com.toJSON()).toMatchSnapshot();
  });

  it('custom error component', () => {
    const com = renderer.create(
      <ErrorBoundary errorCom={<h1>custom error component</h1>}>
        <TestCom error={true} />
      </ErrorBoundary>
    );

    expect(com.toJSON()).toMatchSnapshot();
  });
});

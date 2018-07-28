import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import Index from '../index';

describe('Just a test', () => {
  it('Should render', () => {
    const tree = renderer.create(
      <Provider store={{ getState: () => {}, subscribe: jest.fn(), dispatch: jest.fn() }}>
        <Index />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});

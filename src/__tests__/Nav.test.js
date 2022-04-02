import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Nav from '../components/Nav';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Nav />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

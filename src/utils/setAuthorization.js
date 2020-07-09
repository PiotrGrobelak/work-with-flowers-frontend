import { authenticate } from 'redux/actions/sessionActions';

export default function setAuthorization(store) {
  store.dispatch(authenticate());
}

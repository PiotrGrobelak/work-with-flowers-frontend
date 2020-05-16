import { authenticate } from 'actions';

export default function setAuthorization(store) {
  store.dispatch(authenticate());
}

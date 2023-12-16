import { account, cart, login, search } from './custom';

const icons = {
  search,
  cart,
  account,
  login
};

export type Icons = keyof typeof icons;

export default icons;

import type { MetaFunction } from '@remix-run/node';
import { Homepage } from '~/components/Homepage/Homepage';

export const meta: MetaFunction = () => {
  return [
    { title: 'World Culture Unveiled' },
    { name: 'World Culture Unveiled', content: 'Welcome to the world' },
  ];
};

export default function Index() {
  return <Homepage />;
}

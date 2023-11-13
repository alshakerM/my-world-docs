import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'World Culture Unveiled' },
    { name: 'World Culture Unveiled', content: 'Welcome to the world' },
  ];
};

export default function Index() {
  return (
    <div
      style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}
    ></div>
  );
}

import type { MetaFunction } from '@remix-run/node';
import { CountryPage } from '~/components/CountryPage/CountryPage';
import data from '../../EU-data.json';

let urlParam: string | undefined;

export const meta: MetaFunction = ({ params }) => {
  urlParam = params.countries;
  return [
    { title: `${urlParam} Culture Unveiled` },
    { name: 'World Culture Unveiled', content: 'Welcome to the world' },
  ];
};

export default function Country() {
  const renderedCountry = Object.values(data).filter(
    (country) => country.name === urlParam
  );
  return <CountryPage country={renderedCountry[0] || data[0]} />;
}

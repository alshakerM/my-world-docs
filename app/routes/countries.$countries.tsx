import type { MetaFunction } from '@remix-run/node';
import { CountryPage } from '~/components/CountryPage/CountryPage';
import * as allData from '../../data';

let urlParam: string | undefined;

export const meta: MetaFunction = ({ params }) => {
  urlParam = params.countries;
  return [
    { title: `${urlParam} Culture Unveiled` },
    { name: 'World Culture Unveiled', content: 'Welcome to the world' },
  ];
};

export default function Country() {
  const data = Object.values(allData).reduce<Array<any>>(
    (accumulator, currentValue) => {
      return accumulator.concat(currentValue);
    },
    []
  );
  const renderedCountry = Object.values(data).filter(
    (country) => country.name === urlParam
  );
  return <CountryPage country={renderedCountry[0] || data[0]} />;
}

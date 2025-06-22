import { Link } from 'react-router-dom';
import type { Country } from '../types/Country';

interface CardProps {
  country: Country;
}

const Card = ({ country }: CardProps) => {
  return (
    <Link
      to={`/country/${country.cca3}`}
      className="block rounded-lg shadow-lg bg-white overflow-hidden transform hover:-translate-y-1 transition-transform duration-200"
    >
      <img
        src={country.flags.svg}
        alt={`Bandeira de ${country.name.common}`}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{country.name.common}</h3>
        <p className="text-sm text-gray-700">
          <strong>População:</strong>{' '}
          {country.population.toLocaleString('pt-BR')}
        </p>
        <p className="text-sm text-gray-700">
          <strong>Região:</strong> {country.region}
        </p>
        <p className="text-sm text-gray-700">
          <strong>Capital:</strong> {country.capital?.join(', ')}
        </p>
      </div>
    </Link>
  );
};

export default Card;

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCountryByCode } from '../services/api';
import type { Country } from '../types/Country';

const CountryDetail = () => {
  const { code } = useParams<{ code: string }>();

  const [country, setCountry] = useState<Country | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (code) {
      const fetchCountry = async () => {
        setIsLoading(true);
        const data = await getCountryByCode(code);
        setCountry(data);
        setIsLoading(false);
      };
      fetchCountry();
    }
  }, [code]);

  if (isLoading) {
    return <p className="text-center mt-10 text-gray-500">Carregando...</p>;
  }

  if (!country) {
    return (
      <p className="text-center mt-10 text-red-500">País não encontrado.</p>
    );
  }

  return (
    <div className="container mx-auto p-8">
      {/* Botão para voltar para a página inicial */}
      <Link
        to="/"
        className="inline-block bg-white py-2 px-6 rounded shadow-md hover:bg-gray-100 transition-colors mb-12"
      >
        &larr; Voltar
      </Link>

      {/* Grid principal para a bandeira e as informações */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {}
        <div className="w-full aspect-video bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <img
            src={country.flags.svg}
            alt={`Bandeira de ${country.name.common}`}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">{country.name.official}</h2>

          {/* Grid secundário para os detalhes em texto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-800">
            <p>
              <strong>Nome Comum:</strong> {country.name.common}
            </p>
            <p>
              <strong>População:</strong>{' '}
              {country.population.toLocaleString('pt-BR')}
            </p>
            <p>
              <strong>Região:</strong> {country.region}
            </p>
            <p>
              <strong>Sub-região:</strong> {country.subregion}
            </p>
            <p>
              <strong>Capital:</strong> {country.capital?.join(', ')}
            </p>
            <p>
              <strong>Moedas:</strong>{' '}
              {Object.values(country.currencies)
                .map((c) => c.name)
                .join(', ')}
            </p>
            <p>
              <strong>Línguas:</strong>{' '}
              {Object.values(country.languages).join(', ')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;

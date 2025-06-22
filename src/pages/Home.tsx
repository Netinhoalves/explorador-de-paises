import { useState, useEffect } from 'react';
import { getAllCountries } from '../services/api';
import type { Country } from '../types/Country';
import Card from '../components/Card';

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getAllCountries();
      setCountries(data);
      setIsLoading(false);
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (isLoading) {
    return <p className="text-center text-gray-500">Carregando...</p>;
  }

  return (
    <div className="container mx-auto px-8 py-4">
      {/* Seção do campo de busca */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Pesquisar por um país..."
          className="w-full max-w-lg p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Seção da grade de países, que agora usa a lista filtrada */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredCountries.map((country) => (
          <Card key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;

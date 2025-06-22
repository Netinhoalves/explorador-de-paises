import { useState, useEffect } from 'react';
import { getAllCountries } from '../services/api';
import type { Country } from '../types/Country';
import Card from '../components/Card';

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getAllCountries();
      setCountries(data);
      setIsLoading(false);
    };

    fetchCountries();
  }, []); // O array vazio garante que o useEffect rode apenas uma vez

  if (isLoading) {
    return <p className="text-center text-gray-500">Carregando...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {countries.map((country) => (
        <Card key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default Home;

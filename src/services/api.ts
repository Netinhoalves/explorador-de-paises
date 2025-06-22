import axios from 'axios';
import type { Country } from '../types/Country';

const apiClient = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
});

export const getAllCountries = async (): Promise<Country[]> => {
  try {
    const response = await apiClient.get(
      '/all?fields=name,capital,region,population,flags,cca3,subregion,currencies,languages',
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar países:', error);
    return [];
  }
};

export const getCountryByCode = async (
  code: string,
): Promise<Country | null> => {
  try {
    // A API retorna um array com um único item, por isso o [0]
    const response = await apiClient.get(`/alpha/${code}`);
    return response.data[0];
  } catch (error) {
    console.error('País não encontrado:', error);
    return null;
  }
};

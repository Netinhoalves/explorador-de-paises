import axios from 'axios';
import type { Country } from '../types/Country';

const apiClient = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
});

export const getAllCountries = async (): Promise<Country[]> => {
  try {
    const response = await apiClient.get('/all');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar países:', error);
    return [];
  }
};

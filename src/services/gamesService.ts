import axios from './axios';
import type { Game } from '../types';

export const getGames = async (): Promise<Game[]> => {
  const { data } = await axios.get('/games');
  return data;
}; 
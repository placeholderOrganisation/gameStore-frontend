import axios from './axios';
import type { Game } from '../types';

export const getGames = async (): Promise<Game[]> => {
  const { data } = await axios.get('/games');
  return data;
};

interface EmailRequest {
  email: string;
  customername: string;
  customercontact: string;
  gamename?: string;
  platform?: string;
  mode: 1 | 2;
}

export const sendEmailRequest = async (request: EmailRequest): Promise<{ success: boolean; message: string }> => {
  const { data } = await axios.post('/email/send', request);
  return data;
};
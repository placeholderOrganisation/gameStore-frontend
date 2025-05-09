import { getSessionStorage } from "./browser";

export interface Sheet {
  id: string;
  data: Array<object>;
}

export const convertSheetDataToList = (data: Sheet[]): Object[] => {
  return data?.length > 0 ? data[0]?.data : [];
};

export const shouldCallGoogleSheetsApi = () => {
  const gamesData = getSessionStorage("games");

  return !gamesData;
};

export interface Game {
  title: string;
  platform: string;
  quantity: number;
}

export const appendWaitlist = async (game: Game) => {
  const sheetId = import.meta.env.VITE_GOOGLE_SHEETS_ID;
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/waitlist:append?valueInputOption=USER_ENTERED&key=${apiKey}`;
  const timestamp = new Date().toISOString();
  const values = [[game.title, game.platform, timestamp]];
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ values })
  });
};

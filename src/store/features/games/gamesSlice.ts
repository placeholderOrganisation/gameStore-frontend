import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Game } from '../../../types';

interface GamesState {
  games: Game[];
  loading: boolean;
  error: string | null;
  genres: string[];
  platforms: string[];
}

const initialState: GamesState = {
  games: [],
  genres: ["All"],
  platforms: ["All"],
  loading: false,
  error: null,
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<Game[]>) => {
      state.games = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setGenres: (state, action: PayloadAction<string[]>) => {
      state.genres = ["All", ...action.payload];
    },
    setPlatforms: (state, action: PayloadAction<string[]>) => {
      state.platforms = ["All", ...action.payload];
    },
  },
});

export const { setGames, setLoading, setError, setGenres, setPlatforms } =
  gamesSlice.actions;
export default gamesSlice.reducer;

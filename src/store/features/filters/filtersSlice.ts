import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  searchQuery: string;
  selectedPlatform: string;
  selectedGenre: string;
  sortBy: string;
}

const initialState: FiltersState = {
  searchQuery: '',
  selectedPlatform: 'All',
  selectedGenre: 'All',
  sortBy: 'name_asc',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSelectedPlatform: (state, action: PayloadAction<string>) => {
      state.selectedPlatform = action.payload;
    },
    setSelectedGenre: (state, action: PayloadAction<string>) => {
      state.selectedGenre = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    resetFilters: (state) => {
      return initialState;
    },
  },
});

export const {
  setSearchQuery,
  setSelectedPlatform,
  setSelectedGenre,
  setSortBy,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer; 
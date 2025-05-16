import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  searchQuery: string;
  selectedPlatforms: string[];
  selectedGenres: string[];
  sortBy: string;
}

const initialState: FiltersState = {
  searchQuery: '',
  selectedPlatforms: ['All'],
  selectedGenres: ['All'],
  sortBy: 'name_asc',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSelectedPlatforms: (state, action: PayloadAction<string[]>) => {
      state.selectedPlatforms = action.payload;
    },
    setSelectedGenres: (state, action: PayloadAction<string[]>) => {
      state.selectedGenres = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const {
  setSearchQuery,
  setSelectedPlatforms,
  setSelectedGenres,
  setSortBy,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer; 
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { 
  Container, 
  TextField, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel,
  Stack,
  Box,
  Typography,
  type SelectChangeEvent,
  Grid,
  Alert,
} from "@mui/material";
import { platforms, genres, sortOptions } from "../../data";
import GameCard from '../../components/GameCard';
import { getGames } from '../../services/gamesService';
import Loading from '../../components/general/loading';

const CatalogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('name_asc');

  const { data: games = [], isLoading, error } = useQuery({
    queryKey: ['games'],
    queryFn: getGames,
  });

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  if (isLoading) return <Loading />;
  
  if (error) return (
    <Container>
      <Alert severity="error">Error loading games: {error.message}</Alert>
    </Container>
  );

  const filteredGames = games
    .filter(game => {
      const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPlatform = selectedPlatform === 'All' || game.platform === selectedPlatform;
      const matchesGenre = selectedGenre === 'All' || game.genre === selectedGenre;
      
      return matchesSearch && matchesPlatform && matchesGenre;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name_asc':
          return a.name.localeCompare(b.name);
        case 'name_desc':
          return b.name.localeCompare(a.name);
        case 'price_asc':
          return a.price - b.price;
        case 'price_desc':
          return b.price - a.price;
        case 'rating_desc':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Stack spacing={3}>
        {/* Filters Section */}
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={2}
          sx={{ width: '100%' }}
        >
          <TextField
            fullWidth
            label="Search Games"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FormControl fullWidth>
            <InputLabel>Platform</InputLabel>
            <Select
              value={selectedPlatform}
              label="Platform"
              onChange={(e) => setSelectedPlatform(e.target.value)}
            >
              {platforms.map(platform => (
                <MenuItem key={platform} value={platform}>{platform}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Genre</InputLabel>
            <Select
              value={selectedGenre}
              label="Genre"
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              {genres.map(genre => (
                <MenuItem key={genre} value={genre}>{genre}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortBy}
              label="Sort By"
              onChange={handleSortChange}
            >
              {sortOptions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>

        {/* Games Grid */}
        <Grid container spacing={2}>
          {filteredGames.map((game) => (
            <Grid size={{ sm: 6, md: 4, lg: 3 }} key={game.name}>
              <GameCard game={game} />
            </Grid>
          ))}
        </Grid>

        {filteredGames.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h6" color="text.secondary">
              No games found matching your criteria
            </Typography>
          </Box>
        )}
      </Stack>
    </Container>
  );
};

export default CatalogPage;
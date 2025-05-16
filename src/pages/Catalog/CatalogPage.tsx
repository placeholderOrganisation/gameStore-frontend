import React from "react";
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
  Grid,
  OutlinedInput,
  Checkbox,
  ListItemText,
  Button,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import { sortOptions } from "../../data";
import GameCard from "../../components/GameCard";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  setSearchQuery,
  setSelectedPlatforms,
  setSelectedGenres,
  setSortBy,
  resetFilters,
} from "../../store/features/filters/filtersSlice";
import FetchGames from "../../components/data-fetcher/FetchGames";
import RightFullPageDrawer from "../../components/general/RightFullPageDrawer";
import TuneIcon from "@mui/icons-material/Tune";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
const CatalogPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { games, genres, platforms } = useAppSelector((state) => state.games);
  const {
    searchQuery,
    selectedPlatforms,
    selectedGenres,
    sortBy,
  } = useAppSelector((state) => state.filters);

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  if (games.length === 0) return <FetchGames />;

  const handleSortChange = (event: SelectChangeEvent) => {
    dispatch(setSortBy(event.target.value));
  };

  const filteredGames = games
    .filter((game) => {
      const matchesSearch = game.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesPlatform =
        selectedPlatforms.length === 0 ||
        selectedPlatforms.includes(game.platform) ||
        selectedPlatforms.includes("All");
      const matchesGenre =
        selectedGenres.length === 0 ||
        selectedGenres.includes(game.genre) ||
        selectedGenres.includes("All");

      return matchesSearch && matchesPlatform && matchesGenre;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name_asc":
          return a.name.localeCompare(b.name);
        case "name_desc":
          return b.name.localeCompare(a.name);
        case "price_asc":
          return a.price - b.price;
        case "price_desc":
          return b.price - a.price;
        case "rating_desc":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Stack spacing={3}>
        {/* Search Bar with Filter Drawer Icon */}
        <TextField
          fullWidth
          label="Search Games"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" sx={{ cursor: "pointer" }}>
                <Divider orientation="vertical" sx={{ height: 28, mx: 1 }} />
                <TuneIcon onClick={() => setDrawerOpen(true)} />
              </InputAdornment>
            ),
          }}
        />

        {/* Filter Drawer */}
        <RightFullPageDrawer
          open={drawerOpen}
          drawerClose={() => setDrawerOpen(false)}
          drawerTitle="Filters"
          footer={
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              sx={{
                my: 3,
                mx: [2, 0],
              }}
            >
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => setDrawerOpen(false)}
              >
                Apply
              </Button>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={() => {
                  dispatch(resetFilters());
                  setDrawerOpen(false);
                }}
              >
                Reset
              </Button>
            </Stack>
          }
        >
          <Stack spacing={2} sx={{ mt: 2 }}>
            <FormControl fullWidth size="small">
              <InputLabel>Platform</InputLabel>
              <Select
                multiple
                value={selectedPlatforms}
                onChange={(e) =>
                  dispatch(setSelectedPlatforms(e.target.value as string[]))
                }
                input={<OutlinedInput label="Platform" />}
                renderValue={(selected) => (selected as string[]).join(", ")}
              >
                {platforms.map((platform) => (
                  <MenuItem key={platform} value={platform}>
                    <Checkbox
                      checked={selectedPlatforms.indexOf(platform) > -1}
                    />
                    <ListItemText
                      primary={platform}
                      sx={{ textTransform: "capitalize" }}
                    />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth size="small">
              <InputLabel>Genre</InputLabel>
              <Select
                multiple
                value={selectedGenres}
                onChange={(e) =>
                  dispatch(setSelectedGenres(e.target.value as string[]))
                }
                input={<OutlinedInput label="Genre" />}
                renderValue={(selected) => (selected as string[]).join(", ")}
              >
                {genres.map((genre) => (
                  <MenuItem key={genre} value={genre}>
                    <Checkbox checked={selectedGenres.indexOf(genre) > -1} />
                    <ListItemText
                      primary={genre}
                      sx={{ textTransform: "capitalize" }}
                    />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth size="small">
              <InputLabel>Sort By</InputLabel>
              <Select
                value={sortBy}
                label="Sort By"
                onChange={handleSortChange}
              >
                {sortOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </RightFullPageDrawer>

        {/* Games Grid */}
        <Grid container spacing={2}>
          {filteredGames.map((game) => (
            <Grid
              size={{
                xs: 6,
                sm: 4,
                md: 3,
                lg: 2.4,
              }}
              key={game.name}
            >
              <GameCard game={game} shouldShowCardContent={true} />
            </Grid>
          ))}
        </Grid>

        {filteredGames.length === 0 && (
          <Box sx={{ textAlign: "center", py: 4 }}>
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

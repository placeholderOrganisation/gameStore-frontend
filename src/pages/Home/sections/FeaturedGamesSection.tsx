import React from "react";
import { Container, Typography, Button, Stack, Grid } from "@mui/material";
import { APP_PAGES } from "../../../data";
import useNavigateForInAppUrl from "../../../hooks/useNavigateForInAppUrl";
import GameCard from "../../../components/GameCard";
import FetchGames from "../../../components/data-fetcher/FetchGames";
import { useAppSelector } from "../../../store/hooks";
const FeaturedGamesSection: React.FC = () => {
  const { games } = useAppSelector((state) => state.games);
  const navigateForInAppUrl = useNavigateForInAppUrl();

  if (games.length === 0) return <FetchGames />;

  const featuredGames = games.filter((game) => game.featured);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Stack spacing={4} sx={{ width: "100%" }}>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Typography variant="h2">Featured Games</Typography>
        </Stack>
        <Grid container spacing={2}>
          {featuredGames.map((game, index) => (
            <Grid size={{ sm: 6, md: 4, lg: 3 }} key={index}>
              <GameCard game={game} shouldShowCardContent={false} />
            </Grid>
          ))}
        </Grid>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: ["100%", "25%"] }}
            onClick={() => navigateForInAppUrl(APP_PAGES.catalog)}
          >
            Show More
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default FeaturedGamesSection;

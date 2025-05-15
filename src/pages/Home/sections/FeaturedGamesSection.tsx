import React from "react";
import { Container, Typography, Button, Stack, Grid } from "@mui/material";
import { APP_PAGES, featuredGames } from "../../../data";
import useNavigateForInAppUrl from "../../../hooks/useNavigateForInAppUrl";
import GameCard from "../../../components/GameCard";

const FeaturedGamesSection: React.FC = () => {
  const navigateForInAppUrl = useNavigateForInAppUrl();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Stack spacing={4} sx={{ width: "100%" }}>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Typography variant="h2">Featured Games</Typography>
        </Stack>
        <Grid container spacing={2}>
          {featuredGames.map((game, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
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

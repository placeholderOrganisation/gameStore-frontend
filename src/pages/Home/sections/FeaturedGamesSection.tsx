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
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Stack spacing={3} alignItems="center">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 600,
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          Featured Games
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{
            width: "100%",
            justifyContent: "center",
          }}
        >
          {featuredGames.map((game, index) => (
            <Grid
              size={{
                xs: 6,
                sm: 4,
                md: 3,
                lg: 2.4,
              }}
              key={index}
            >
              <GameCard game={game} shouldShowCardContent={false} />
            </Grid>
          ))}
        </Grid>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            mt: 2,
            py: 1.5,
            borderRadius: 2,
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 600,
            maxWidth: { xs: "100%", md: "300px" },
            mx: "auto",
          }}
          onClick={() => navigateForInAppUrl(APP_PAGES.catalog)}
        >
          View All Games
        </Button>
      </Stack>
    </Container>
  );
};

export default FeaturedGamesSection;

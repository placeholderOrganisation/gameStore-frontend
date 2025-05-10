import React from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Chip,
  Box,
  Rating,
  useTheme,
} from "@mui/material";
import { Star as StarIcon } from "@mui/icons-material";
import { APP_PAGES, featuredGames } from "../../../data";
import { isDesktop } from "../../../utils/browser";
import useNavigateForInAppUrl from "../../../hooks/useNavigateForInAppUrl";
import GameCard from "../../../components/GameCard";

const FeaturedGamesSection: React.FC = () => {
  const isDesktopView = isDesktop();
  const theme = useTheme();
  const navigateForInAppUrl = useNavigateForInAppUrl();
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Stack spacing={4} sx={{ width: "100%" }}>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Typography
            variant="h2"
            sx={{
              alignContent: "center",
            }}
          >
            Featured Games
          </Typography>
        </Stack>
        <Stack
          direction={isDesktopView ? "row" : "column"}
          flexWrap="wrap"
          justifyContent="space-between"
          spacing={2}
        >
          {featuredGames.map((game, index) => (
            <GameCard key={index} game={game} shouldShowCardContent={false} />
          ))}
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "100%",
          }}
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

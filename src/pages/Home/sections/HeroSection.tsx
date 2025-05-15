import React, { useState } from "react";
import { Container, Typography, Box, Button, Stack } from "@mui/material";
import { keyframes } from "@emotion/react";
import useNavigateForInAppUrl from "../../../hooks/useNavigateForInAppUrl";
import { APP_PAGES } from "../../../data";
import GameRequestForm from "../../../components/GameRequestForm/GameRequestForm";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const navigateForInAppUrl = useNavigateForInAppUrl();
  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(to right, #7c3aed, #1e40af)",
        color: "white",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="center"
          sx={{ animation: `${fadeIn} 0.5s ease-out` }}
        >
          <Box flex={1} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 700,
                lineHeight: 1.2,
                animation: `${fadeIn} 0.7s ease-out`,
              }}
            >
              Discover Your Next Gaming Adventure
            </Typography>
            <Typography
              variant="h6"
              paragraph
              sx={{
                fontSize: { xs: "1rem", md: "1.25rem" },
                animation: `${fadeIn} 0.7s ease-out`,
              }}
            >
              Quality pre-owned games at unbeatable prices. Trade, buy, or sell
              your favorite titles.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ animation: `${fadeIn} 0.5s ease-out` }}
            >
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    boxShadow: "0 6px 25px rgba(0, 0, 0, 0.3)",
                  },
                }}
                onClick={() => navigateForInAppUrl(APP_PAGES.catalog)}
              >
                Browse Games
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                onClick={() => setIsFormOpen(true)}
                sx={{
                  borderColor: "rgba(255, 255, 255, 0.7)",
                  "&:hover": {
                    borderColor: "white",
                  },
                }}
              >
                Sell Your Games
              </Button>
            </Stack>
          </Box>
          <Box
            flex={1}
            display={{ xs: "none", md: "flex" }}
            justifyContent="center"
          >
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Featured Games"
              style={{
                borderRadius: 8,
                width: "100%",
                maxWidth: 600,
                animation: `${fadeIn} 0.7s ease-out`,
              }}
            />
          </Box>
        </Stack>
      </Container>
      <GameRequestForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        mode={2}
      />
    </Box>
  );
};

export default HeroSection;

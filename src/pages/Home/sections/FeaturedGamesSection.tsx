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
import { featuredGames } from "../../../data";
import { isDesktop } from "../../../utils/browser";

const FeaturedGamesSection: React.FC = () => {
  const isDesktopView = isDesktop();
  const theme = useTheme();

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
          spacing={2}
          flexWrap="wrap"
          justifyContent="space-between"
        >
          {featuredGames.map((game, index) => (
            <Card
              key={index}
              sx={{
                width: { xs: "100%", sm: "48%", md: "23%" },
                mb: 2,
                borderRadius: 2,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
                position: "relative",
              }}
            >
              <Chip
                label={game.platform}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  zIndex: 1,
                }}
              />
              <CardMedia
                component="img"
                height="300"
                image={game.image}
                alt={game.title}
                sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
              />
              <CardContent
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  borderTop: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: 600,
                    minHeight: ["unset", 64],
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {game.title}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <Rating
                    name={`rating-${index}`}
                    value={game.rating}
                    precision={0.5}
                    icon={<StarIcon fontSize="inherit" />}
                    emptyIcon={<StarIcon fontSize="inherit" />}
                    readOnly
                  />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    mt: 1,
                    color: "text.primary",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                  }}
                >
                  ${game.price}
                </Typography>
              </CardContent>
            </Card>
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
          >
            Show More
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default FeaturedGamesSection;

import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
  Stack,
  useTheme,
  Rating,
} from "@mui/material";
import type { Game } from "../../types";

export type GameCardLayoutProps = {
  game: Game;
  onClick?: () => void;
  shouldShowCardContent?: boolean;
};

export const GameCardMobileLayout: React.FC<GameCardLayoutProps> = ({
  game,
  onClick,
  shouldShowCardContent = true,
}) => {
  const theme = useTheme();

  return (
    <Card
      onClick={onClick}
      sx={{
        width: "100%",
        borderRadius: 2,
        boxShadow: theme.shadows[2],
        background: theme.palette.background.paper,
        overflow: "hidden",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
          cursor: onClick ? "pointer" : "default",
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={game.imgs.small_url || ""}
          alt={game.formattedName}
          sx={{
            width: "100%",
            aspectRatio: "8/9",
            objectFit: "cover",
          }}
        />
        <Chip
          label={`$${game.price.toFixed(2)}`}
          size="small"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "common.black",
            backgroundColor: "grey.300",
            fontWeight: 600,
            fontSize: "0.875rem",
            height: 24,
            "& .MuiChip-label": {
              px: 1,
            },
          }}
        />
      </Box>

      {shouldShowCardContent && (
        <CardContent sx={{ p: 1.5 }}>
          <Stack spacing={1}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                lineHeight: 1.2,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
              }}
            >
              {game.formattedName}
            </Typography>

            <Stack spacing={1} alignItems="start">
              <Rating
                value={game.rating}
                readOnly
                precision={0.5}
                size="small"
                sx={{ fontSize: "1rem" }}
              />
              <Chip
                label={game.platform}
                size="small"
                sx={{
                  color: "common.black",
                  backgroundColor: "grey.300",
                }}
              />
            </Stack>
          </Stack>
        </CardContent>
      )}
    </Card>
  );
};

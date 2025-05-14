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
} from "@mui/material";
import type { Game } from "../types";

type GameCardProps = {
  game: Game;
  onClick?: () => void;
  shouldShowCardContent?: boolean;
};

const GameCard: React.FC<GameCardProps> = ({
  game,
  onClick,
  shouldShowCardContent = true,
}) => {
  const theme = useTheme();

  return (
    <Card
      onClick={onClick}
      sx={{
        mb: 2,
        minWidth: 275,
        borderRadius: 3,
        boxShadow: theme.shadows[3],
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
        p: 0,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.18s, box-shadow 0.18s",
        "&:hover": {
          transform: "translateY(-4px) scale(1.015)",
          boxShadow: theme.shadows[8],
          cursor: onClick ? "pointer" : "default",
        },
      }}
    >
      {/* Image & Platform */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={game.imgs?.[0] || ""}
          alt={game.name}
          sx={{
            borderRadius: "12px 12px 0 0",
            height: 180,
            objectFit: "cover",
            width: "100%",
            background: "background.paper",
          }}
        />
        {/* Price Chip at top right */}
        <Chip
          label={`$${game.price.toFixed(2)}`}
          size="small"
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            background: theme.palette.error.main,
            color: theme.palette.getContrastText(theme.palette.error.main),
            fontWeight: 700,
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 0,
            py: 0,
            borderRadius: "0 16px 0 16px",
            boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)",
            zIndex: 2,
          }}
        />
      </Box>
      {/* Content */}
      {shouldShowCardContent && (
        <CardContent sx={{ flexGrow: 1, pb: 0, pt: 2 }}>
          <Stack spacing={1}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 700,
                  flex: 1,
                  lineHeight: 1.2,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {game.name}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Stack direction="row" spacing={1} alignItems="center">
                <Chip variant="outlined" label={game.platform} size="small" />
                <Chip variant="outlined" label={game.genre} size="small" />
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      )}
    </Card>
  );
};

export default GameCard;

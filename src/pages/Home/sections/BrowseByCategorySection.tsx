import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  Stack,
  alpha,
  useTheme,
  Button,
} from "@mui/material";
import { APP_PAGES, categories } from "../../../data";
import { isDesktop } from "../../../utils/browser";
import useNavigateForInAppUrl from "../../../hooks/useNavigateForInAppUrl";
// Example icons (replace with official SVGs if you have them)
import {
  Computer,
  PlayStation,
  Xbox,
  Nintendo,
} from "../../../assets/icons/icons";

const iconMap: Record<string, React.ReactNode> = {
  PlayStation: <PlayStation width={35} height={35} />,
  Xbox: <Xbox width={35} height={35} />,
  Nintendo: <Nintendo width={35} height={35} />,
  "PC Games": <Computer width={35} height={35} />,
};

const getGameCount = (category: string) => {
  if (category === "PlayStation") return 124;
  if (category === "Xbox") return 87;
  if (category === "Nintendo") return 56;
  if (category === "PC Games") return 200;
  return 0;
};

const BrowseByCategorySection: React.FC = () => {
  const isDesktopView = isDesktop();
  const theme = useTheme();
  const navigateForInAppUrl = useNavigateForInAppUrl();
  return (
    <Box sx={{ py: 8, backgroundColor: theme.palette.background.paper }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Browse by Category
        </Typography>
        <Stack
          direction={isDesktopView ? "row" : "column"}
          spacing={2}
          flexWrap="wrap"
          justifyContent="space-between"
        >
          {categories.map((category, index) => (
            <Card
              key={index}
              onClick={() => navigateForInAppUrl(APP_PAGES.catalog)}
              sx={{
                width: { xs: "100%", sm: "48%", md: "23%" },
                height: 300,
                position: "relative",
                overflow: "hidden",
                borderRadius: 2,
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0 4px 16px rgba(0,0,0,0.25)"
                    : "0 4px 16px rgba(0,0,0,0.08)",
                background: `linear-gradient(135deg, ${alpha(
                  theme.palette.primary.main,
                  0.08
                )}, ${alpha(theme.palette.secondary.main, 0.08)})`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "transform 0.18s, box-shadow 0.18s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "0 8px 32px rgba(0,0,0,0.32)"
                      : "0 8px 32px rgba(0,0,0,0.13)",
                },
              }}
              elevation={0}
            >
              <Box sx={{ mb: 2, color: theme.palette.primary.main }}>
                {iconMap[category.name]}
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  mb: 0.5,
                  textAlign: "center",
                }}
              >
                {category.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 2,
                  textAlign: "center",
                }}
              >
                {getGameCount(category.name)} Games
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: 6,
                  textTransform: "none",
                  fontWeight: 500,
                  px: 2.5,
                  color: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                  background: alpha(theme.palette.primary.main, 0.06),
                  "&:hover": {
                    background: alpha(theme.palette.primary.main, 0.12),
                  },
                }}
                // endIcon={<SportsEsportsIcon sx={{ fontSize: 18 }} />}
              >
                Browse Games
              </Button>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default BrowseByCategorySection;

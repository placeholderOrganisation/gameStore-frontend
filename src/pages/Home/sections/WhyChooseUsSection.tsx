import React from "react";
import {
  Container,
  Typography,
  Box,
  Stack,
  useTheme,
  alpha,
} from "@mui/material";
import { features } from "../../../data";
import {
  QualityGuaranteed,
  TradeIn,
  Catalog,
} from "../../../assets/icons/icons";

const iconMap = (isDark: boolean) => {
  return {
    QualityGuaranteed: (
      <QualityGuaranteed
        width={35}
        height={35}
        color={isDark ? "#ffffff" : "#000000"}
      />
    ),
    TradeIn: (
      <TradeIn width={35} height={35} color={isDark ? "#ffffff" : "#000000"} />
    ),
    Catalog: (
      <Catalog width={35} height={35} color={isDark ? "#ffffff" : "#000000"} />
    ),
  };
};

const WhyChooseUsSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Stack spacing={4} sx={{ width: "100%" }}>
        <Typography variant="h2" align="center" gutterBottom>
          Why Choose Us
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          flexWrap="wrap"
          justifyContent="space-between"
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", md: "30%" },
                textAlign: "center",
                p: 4,
                borderRadius: 3,
                boxShadow: isDark
                  ? "0 2px 16px 0 rgba(0,0,0,0.32)"
                  : "0 2px 16px 0 rgba(0,0,0,0.08)",
                background: isDark
                  ? alpha(theme.palette.background.paper, 0.7)
                  : alpha(theme.palette.background.paper, 0.95),
                transition: "transform 0.18s, box-shadow 0.18s",
                "&:hover": {
                  transform: "translateY(-4px) scale(1.025)",
                  boxShadow: isDark
                    ? "0 8px 32px 0 rgba(0,0,0,0.38)"
                    : "0 8px 32px 0 rgba(0,0,0,0.13)",
                },
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${alpha(
                      theme.palette.primary.main,
                      0.12
                    )}, ${alpha(theme.palette.secondary.main, 0.12)})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: theme.palette.primary.main,
                  }}
                >
                  {iconMap(isDark)[feature.icon as keyof typeof iconMap]}
                </Box>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  mb: 1,
                }}
              >
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default WhyChooseUsSection;

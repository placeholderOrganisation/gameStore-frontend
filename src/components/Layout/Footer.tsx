import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  alpha,
  Link,
} from "@mui/material";
import { socialLinks } from "../../data";
import { Instagram, Facebook, WhatsApp } from "../../assets/icons/icons";
const iconMap: Record<string, React.ReactNode> = {
  Instagram: <Instagram width={20} height={20} />,
  Facebook: <Facebook width={20} height={20} />,
  WhatsApp: <WhatsApp width={20} height={20} />,
};

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        background: "linear-gradient(to right, #7c3aed, #1e40af)",
        color: "white",
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body1" sx={{ opacity: 0.85 }}>
            &copy; {new Date().getFullYear()} GameStore. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={1}>
            {socialLinks.map((link) => (
              <IconButton
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener"
                sx={{
                  color: "white",
                  backgroundColor: alpha("#fff", 0.08),
                  "&:hover": { backgroundColor: alpha("#fff", 0.18) },
                }}
                aria-label={link.name}
              >
                {iconMap[link.icon]}
              </IconButton>
            ))}
          </Stack>
        </Stack>
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 2, color: "text.white" }}
        >
          Designed by{" "}
          <Link
            href="https://minteksoftware.com"
            target="_blank"
            rel="noopener"
            sx={{ color: "white" }}
          >
            Mintek Software
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

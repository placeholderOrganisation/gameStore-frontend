import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
  Container,
  Box,
  alpha,
  Stack,
  Divider,
} from "@mui/material";
import { WbSunny, NightsStay, Menu as MenuIcon } from "@mui/icons-material";
import { useThemeContext } from "../../context/ThemeContext";
import RightFullPageDrawer from "../general/RightFullPageDrawer";
import NavLinks from "../general/NavLinks";
import type { NavbarLink } from "../../types";
import { APP_PAGES } from "../../data";
import useNavigateForInAppUrl from "../../hooks/useNavigateForInAppUrl";
import GameRequestForm from "../GameRequestForm/GameRequestForm";

const linksToRender: NavbarLink[] = [
  { name: "Home", path: APP_PAGES.home },
  { name: "Games", path: APP_PAGES.catalog },
];

const Navbar: React.FC = () => {
  const theme = useTheme();
  const { toggleTheme, isDarkMode } = useThemeContext();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerClose = () => setDrawerOpen(false);
  const navigateForInAppUrl = useNavigateForInAppUrl();
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        sx={{
          backdropFilter: "blur(8px)",
          backgroundColor: alpha(theme.palette.background.paper, 0.8),
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ px: { xs: 0 } }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              {/* Logo */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  cursor: "pointer",
                }}
                onClick={() => navigateForInAppUrl(APP_PAGES.home)}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    color: "primary.main",
                  }}
                >
                  GameVault
                </Typography>
              </Box>

              {/* Mobile menu */}
              <Box>
                <IconButton
                  color="inherit"
                  onClick={() => setDrawerOpen(true)}
                  aria-label="Open menu"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <RightFullPageDrawer
        open={drawerOpen}
        drawerClose={handleDrawerClose}
        drawerTitle="Menu"
        footer={
          <Box>
            <Divider />
            <Box
              sx={{
                py: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <IconButton onClick={toggleTheme} color="inherit">
                {isDarkMode ? <WbSunny /> : <NightsStay />}
              </IconButton>
            </Box>
          </Box>
        }
      >
        <Stack
          direction="column"
          justifyContent="space-between"
          sx={{ height: "100%" }}
        >
          <Box>
            <NavLinks
              linksToRender={linksToRender}
              handleNavLinkClick={handleDrawerClose}
            />
            <Box>
              <NavLinks
                linksToRender={[{ name: "Sell Your Game", path: "" }]}
                handleNavLinkClick={() => setIsFormOpen(true)}
              />
            </Box>
          </Box>
        </Stack>
      </RightFullPageDrawer>
      <GameRequestForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        mode={2}
      />
    </>
  );
};

export default Navbar;

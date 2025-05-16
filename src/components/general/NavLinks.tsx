import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useNavigateForInAppUrl from "../../hooks/useNavigateForInAppUrl";
import type { NavbarLink } from "../../types";

interface NavLinkProps {
  linksToRender: NavbarLink[];
  handleNavLinkClick: () => void;
}

const NavLinks = (props: NavLinkProps) => {
  const { linksToRender, handleNavLinkClick } = props;
  const navigateForInAppUrl = useNavigateForInAppUrl();
  const onLinkClick = (path: string) => {
    if (path) {
      navigateForInAppUrl(path);
    }
    handleNavLinkClick();
  };

  return (
    <Box>
      <List>
        {linksToRender.map((navbarLink, index) => {
          return (
            <Box key={index}>
              <ListItem
                disablePadding
                onClick={() => {
                  onLinkClick(navbarLink.path);
                }}
              >
                <ListItemButton
                  sx={{
                    px: 0,
                  }}
                >
                  <ListItemText primary={navbarLink.name} />
                  <ListItemIcon
                    sx={{
                      minWidth: "unset",
                    }}
                  >
                    <ChevronRightIcon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <Divider />
            </Box>
          );
        })}
      </List>
    </Box>
  );
};

export default NavLinks;

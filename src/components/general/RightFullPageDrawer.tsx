import { Box, Drawer, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface RightFullPageDrawerProps {
  open: boolean;
  drawerClose: () => void;
  drawerTitle: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  allowOverflow?: boolean;
}

const RightFullPageDrawer = (props: RightFullPageDrawerProps) => {
  const {
    open,
    drawerClose,
    drawerTitle,
    children,
    footer,
    allowOverflow = false,
    ...otherprops
  } = props;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={drawerClose}
      {...otherprops}
      sx={{
        "& .MuiDrawer-paper": {
          width: { xs: "100%", md: "25vw" },
          height: "100vh",
          maxHeight: "100dvh",
          p: 2,
          overflow: allowOverflow ? "auto" : "visible",
        },
      }}
      transitionDuration={300}
    >
      <>
        {/* Drawer header start */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            my: 4,
          }}
        >
          <Typography variant="h4" component="div">
            {drawerTitle}
          </Typography>
          <CloseIcon
            onClick={drawerClose}
            sx={{
              cursor: "pointer",
            }}
          />
        </Stack>
        {/* Drawer header end */}
        {children}
        {/* Drawer footer start */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            zIndex: 1000,
            bgcolor: "background.paper",
          }}
        >
          {footer}
        </Box>
        {/* Drawer footer end */}
      </>
    </Drawer>
  );
};

export default RightFullPageDrawer;

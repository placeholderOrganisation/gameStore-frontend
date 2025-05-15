import { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import RightFullPageDrawer from "../general/RightFullPageDrawer";
import { sendEmailRequest } from "../../services/api";

interface GameRequestFormProps {
  isOpen: boolean;
  onClose: () => void;
  gameName?: string;
  platform?: string;
  mode: 1 | 2; // 1 for waitlist, 2 for selling
}

interface FormData {
  email: string;
  customername: string;
  customercontact: string;
  gamename?: string;
  platform?: string;
}

const GameRequestForm = ({
  isOpen,
  onClose,
  gameName,
  platform,
  mode,
}: GameRequestFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    customername: "",
    customercontact: "",
    gamename: gameName || "",
    platform: platform || "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "error" as "error" | "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    const missingFields = [];
    if (!gameName && !formData.gamename) missingFields.push("Game Name");
    if (!platform && !formData.platform) missingFields.push("Platform");
    if (!formData.customername) missingFields.push("Name");
    if (!formData.email) missingFields.push("Email");
    if (!formData.customercontact) missingFields.push("Contact Number");

    if (missingFields.length > 0) {
      setSnackbar({
        open: true,
        message: `Please fill in the following fields: ${missingFields.join(
          ", "
        )}`,
        severity: "error",
      });
      return;
    }

    try {
      const response = await sendEmailRequest({
        ...formData,
        mode,
      });

      if (response.success) {
        setSnackbar({
          open: true,
          message: "Request submitted successfully!",
          severity: "success",
        });
      } else {
        setSnackbar({
          open: true,
          message: response.message || "Failed to send request",
          severity: "error",
        });
      }
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      setSnackbar({
        open: true,
        message: "An error occurred while sending the request",
        severity: "error",
      });
      setTimeout(() => {
        onClose();
      }, 2000);
      console.error("Error sending request:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <RightFullPageDrawer
        open={isOpen}
        drawerClose={onClose}
        drawerTitle={mode === 1 ? "Join Waitlist" : "Sell Your Game"}
        footer={
          <Stack direction="row" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ m: 2 }}
              fullWidth
              onClick={handleSubmit}
            >
              {mode === 1 ? "Join Waitlist" : "Submit Request"}
            </Button>
          </Stack>
        }
      >
        <Box component="form" onSubmit={handleSubmit} sx={{ p: 2 }}>
          <Paper
            elevation={0}
            sx={{ p: 3, mb: 3, bgcolor: "background.default" }}
          >
            <Typography variant="h6" gutterBottom>
              Game Details
            </Typography>
            <Stack spacing={2}>
              {!gameName ? (
                <TextField
                  fullWidth
                  label="Game Name"
                  name="gamename"
                  value={formData.gamename}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              ) : (
                <TextField
                  fullWidth
                  label="Game Name"
                  name="gamename"
                  value={gameName}
                  required
                  variant="outlined"
                  InputProps={{ readOnly: true }}
                />
              )}

              {!platform ? (
                <TextField
                  fullWidth
                  label="Platform"
                  name="platform"
                  value={formData.platform}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              ) : (
                <TextField
                  fullWidth
                  label="Platform"
                  name="platform"
                  value={platform}
                  required
                  variant="outlined"
                  InputProps={{ readOnly: true }}
                />
              )}
            </Stack>
          </Paper>

          <Paper elevation={0} sx={{ p: 3, bgcolor: "background.default" }}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Stack spacing={2}>
              <TextField
                fullWidth
                label="Your Name"
                name="customername"
                value={formData.customername}
                onChange={handleChange}
                required
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Email address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
              />

              <TextField
                fullWidth
                label="Contact Number"
                name="customercontact"
                value={formData.customercontact}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Stack>
          </Paper>
        </Box>
      </RightFullPageDrawer>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default GameRequestForm;

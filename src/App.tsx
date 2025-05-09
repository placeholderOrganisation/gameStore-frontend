import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/home.page";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../utils/browser";

/**
 * Custom hook to navigate within the app and scroll to top.
 * Returns a function: (path: string) => void
 */
const useNavigateForInAppUrl = () => {
  const navigate = useNavigate();

  return (path: string) => {
    navigate(path);
    scrollToTop();
  };
};

export default useNavigateForInAppUrl;

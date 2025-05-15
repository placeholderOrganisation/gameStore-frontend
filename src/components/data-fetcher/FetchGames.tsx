import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../general/loading";
import { Alert, Container } from "@mui/material";
import { setGames } from "../../store/features/games/gamesSlice";
import { getGames } from "../../services/api";
import { useAppDispatch } from "../../store/hooks";

const FetchGames = () => {
  const dispatch = useAppDispatch();
  const { data: gamesData = [], isLoading, error } = useQuery({
    queryKey: ["games"],
    queryFn: getGames,
  });

  // Update Redux store when React Query data changes
  useEffect(() => {
    if (gamesData.length > 0) {
      dispatch(setGames(gamesData));
    }
  }, [gamesData, dispatch]);

  if (isLoading) return <Loading />;

  if (error)
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="error">Error loading games: {error.message}</Alert>
      </Container>
    );
};

export default FetchGames;

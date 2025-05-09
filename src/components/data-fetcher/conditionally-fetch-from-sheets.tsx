import { useEffect, useState } from "react";
import useGoogleSheets from "use-google-sheets";
import Loading from "../general/loading";
import { convertSheetDataToList } from "../../utils/google-sheets";
import { setSessionStorage } from "../../utils/browser";

interface ConditionallyFetchFromSheetsProps {
  callbackToRunAfterFetchingData: () => void;
}

const ConditionallyFetchFromSheets = (
  props: ConditionallyFetchFromSheetsProps
) => {
  const { callbackToRunAfterFetchingData } = props;
  const [eventsData, setEventsData] = useState<any[]>([]);

  const { data: fetchedEventsData } = useGoogleSheets({
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    sheetId: import.meta.env.VITE_GOOGLE_SHEETS_ID,
    sheetsOptions: [{ id: "games" }],
  });

  useEffect(() => {
    const parsedData = convertSheetDataToList(fetchedEventsData);
    if (parsedData.length > 0) {
      setEventsData(parsedData);
      setSessionStorage("games", parsedData);
    }
  }, [fetchedEventsData]);

  useEffect(() => {
    if (eventsData.length > 0) {
      callbackToRunAfterFetchingData();
    }
  }, [eventsData]);

  return <Loading />;
};

export default ConditionallyFetchFromSheets;

import { useEffect, useState } from "react";
import type { AlertHistoryDataType } from "../mocks/types";
import { apiGet } from "../util";

export const useAlertHistory = () => {
  const [alertHistory, setAlertHistory] = useState<AlertHistoryDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);

      try {
        const response = await apiGet("http://localhost:8000/alertHistory");
        const data = await response;
        setAlertHistory(data);
      } catch (error) {
        console.error("Error fetching alert history:", error);
      } finally {
        setLoading(false);
      }
    };
    FetchData();
  }, []);

  return {
    alertHistory,
    loading,
  };
};

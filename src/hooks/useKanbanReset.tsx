import { useEffect, useState } from "react";
import type { KanbanResetDataType } from "../mocks/types";
import { apiGet } from "../util";

export const useKanbanReset = () => {
  const [kanbanReset, setKanbanReset] = useState<KanbanResetDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      try {
        const response = await apiGet("http://localhost:8000/kabanReset");
        const data = await response;
        setKanbanReset(data);
      } catch (error) {
        console.error("Error fetching alert history:", error);
      } finally {
        setLoading(false);
      }
    };

    FetchData();
  }, []);
  return {
    kanbanReset,
    loading,
  };
};

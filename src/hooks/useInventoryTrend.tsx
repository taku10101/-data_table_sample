import { useEffect, useState } from "react";
import type { InventoryTrendDataType } from "../mocks/types";
import { apiGet } from "../util";

export const useInventoryTrend = () => {
  const [inventoryTrend, setInventoryTrend] = useState<
    InventoryTrendDataType[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);

      try {
        const response = await apiGet("http://localhost:8000/inventoryTrend");
        const data = await response;
        setInventoryTrend(data);
      } catch (error) {
        console.error("Error fetching alert history:", error);
      } finally {
        setLoading(false);
      }
    };

    FetchData();
  }, []);

  return {
    inventoryTrend,
    loading,
  };
};

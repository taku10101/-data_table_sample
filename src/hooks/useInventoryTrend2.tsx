import { useEffect, useState } from "react";
import type { InventoryTrend2DataType } from "../mocks/types";
import { apiGet } from "../util";

export const useInventoryTrend2 = () => {
  const [inventoryTrend2, setInventoryTrend2] = useState<
    InventoryTrend2DataType[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      try {
        const response = await apiGet("http://localhost:8000/inventoryTrend2");
        const data = await response;
        setInventoryTrend2(data);
      } catch (error) {
        console.error("Error fetching alert history:", error);
      } finally {
        setLoading(false);
      }
    };
    FetchData();
  }, []);

  return { inventoryTrend2, loading };
};

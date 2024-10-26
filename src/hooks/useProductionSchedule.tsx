import { useEffect, useState } from "react";
import type { ProductionScheduleDataType } from "../mocks/types";
import { apiGet } from "../util";

export const useProductionSchedule = () => {
  const [productionSchedule, setProductionSchedule] = useState<
    ProductionScheduleDataType[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      try {
        const response = await apiGet(
          "http://localhost:8000/productionSchedule"
        );
        const data = await response;
        setProductionSchedule(data);
      } catch (error) {
        console.error("Error fetching alert history:", error);
      } finally {
        setLoading(false);
      }
    };
    FetchData();
  }, []);
  return {
    productionSchedule,
    loading,
  };
};

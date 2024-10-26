import { useEffect, useState } from "react";
import type { TakeoutDataType } from "../mocks/types";
import { apiGet } from "../util";

export const useTakeout = () => {
  const [takeout, setTakeout] = useState<TakeoutDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      try {
        const response = await apiGet("http://localhost:8000/takeout");
        const data = await response;
        setTakeout(data);
      } catch (error) {
        console.error("Error fetching alert history:", error);
      } finally {
        setLoading(false);
      }
    };

    FetchData();
  }, []);
  return {
    takeout,
    loading,
  };
};

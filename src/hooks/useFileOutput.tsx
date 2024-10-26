import { useEffect, useState } from "react";
import type { FileOutputDataType } from "../mocks/types";
import { apiGet } from "../util";

export const useFileOutput = () => {
  const [fileOutput, setFileOutput] = useState<FileOutputDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      try {
        const response = await apiGet("http://localhost:8000/fileOutput");
        const data = await response;
        setFileOutput(data);
      } catch (error) {
        console.error("Error fetching alert history:", error);
      } finally {
        setLoading(false);
      }
    };
    FetchData();
  }, []);

  return {
    fileOutput,
    loading,
  };
};

"use client";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { api } from "../api";

export interface RecentUploadsinnerDataType {
  id: number;
  name: string;
  summary: string;
  link: string;
}
interface recivedData {
  recentUploads: Array<RecentUploadsinnerDataType>;
}

export const UseRecentUploads: () => UseQueryResult<recivedData> = () => {
  return useQuery({
    queryKey: ["recentUploads"],
    queryFn: async () => {
      const { data } = await api.get("/recentUploads");
      return data;
    },
    staleTime: 2000,
  });
};

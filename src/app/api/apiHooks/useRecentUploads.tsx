"use client";
import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

export const UseRecentUploads = () => {
  return useQuery({
    queryKey: ["recentUploads"],
    queryFn: async () => {
      const { data } = await api.get("/recentUploads");
      return data;
    },
    staleTime: 2000,
  });
};

"use client";
import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

export const UseTopAnime = () => {
  return useQuery({
    queryKey: ["TopAnime"],
    queryFn: async () => {
      const { data } = await api.get("/images");
      return data;
    },
    staleTime: 2000,
  });
};

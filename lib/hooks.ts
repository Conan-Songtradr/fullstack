import useSWR from "swr";
import handleFetch from "./handleFetch";

export const useUser = () => {
  const { data, error, isValidating } = useSWR("user", handleFetch);

  return {
    user: data,
    isLoading: isValidating,
    isError: error,
  };
};

export const usePlaylists = () => {
  const { data, error, isValidating } = useSWR("playlists", handleFetch);

  return {
    playlists: (data as any[]) || [],
    isLoading: isValidating,
    isError: error,
  };
};

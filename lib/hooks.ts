import useSWR from "swr";
import useFetch from "./useFetch";

useSWR;
useFetch;

export const useUser = () => {
  const { data, error, isValidating } = useSWR("user", useFetch);

  return {
    user: data,
    isLoading: isValidating,
    isError: error,
  };
};

export const usePlaylists = () => {
  const { data, error, isValidating } = useSWR("playlists", useFetch);

  return {
    playlists: (data as any[]) || [],
    isLoading: isValidating,
    isError: error,
  };
};

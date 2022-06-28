import { useAppSelector } from "./useAppSelector";

type SetUrlFunc = (page: string) => void;

export const useUrl = (): [string, SetUrlFunc] => {
  const { url } = useAppSelector((state) => state.urlReducer);

  const setPage: SetUrlFunc = (url) => {
    window.history.pushState(null, "", url);
    window.dispatchEvent(new Event("locationchange"));
  };

  return [url, setPage];
};

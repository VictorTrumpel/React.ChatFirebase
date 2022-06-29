import { ReactNode, useEffect, useMemo } from "react";
import { urlSlice } from "../store/reducers/urlSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";

type BrowserProps = {
  children: ReactNode;
};

export const Browser = ({ children }: BrowserProps) => {
  const { changeUrl } = urlSlice.actions;
  const dispatch = useAppDispatch();

  useMemo(() => {
    window.addEventListener("popstate", () => {
      window.dispatchEvent(new Event("locationchange"));
    });

    window.addEventListener("locationchange", () => {
      const pathname = window.location.pathname;
      dispatch(changeUrl(pathname));
    });
  }, []);

  useEffect(() => {
    const pathname = window.location.pathname;
    dispatch(changeUrl(pathname));
  }, []);

  return <>{children}</>;
};

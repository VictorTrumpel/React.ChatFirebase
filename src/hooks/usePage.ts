import { useAppSelector } from "./useAppSelector";
import { pageSlice, PageState } from "../store/reducers/PageSlice";
import { useAppDispatch } from "./useAppDispatch";

type SetPageFunc = (page: PageState) => void;

export const usePage = (): [PageState, SetPageFunc] => {
  const { page: currentPage } = useAppSelector((state) => state.pageReducer);
  const { changePage: changePageAction } = pageSlice.actions;
  const dispatch = useAppDispatch();

  const setPage: SetPageFunc = (page) => {
    dispatch(changePageAction(page));
  };

  return [currentPage, setPage];
};

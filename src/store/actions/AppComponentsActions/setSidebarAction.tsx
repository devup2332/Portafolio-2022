import {
  AppComponentsDispatch,
  setSidebarReducer,
} from "../../reducers/appComponentsReducer";

export const setSidebarAction =
  (open: boolean) => (dispatch: AppComponentsDispatch) => {
    dispatch(setSidebarReducer({ open }));
  };

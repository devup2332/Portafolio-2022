import {
  AppComponentsDispatch,
  setTutorialsSidebarReducer,
} from "../../reducers/appComponentsReducer";

export const setTutorialsSidebarAction =
  (open: boolean) => (dispatch: AppComponentsDispatch) => {
    dispatch(setTutorialsSidebarReducer({ open }));
  };

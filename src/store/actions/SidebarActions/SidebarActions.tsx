import { openSidebarAction, SidebarDispatch } from "../../reducers/SidebarReducer";

export const setSidebar = (open: boolean) => (dispatch: SidebarDispatch) => {
  dispatch(openSidebarAction({ open }));
};

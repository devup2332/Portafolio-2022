import { createSlice } from "@reduxjs/toolkit";
import { RootState, store } from "..";

interface SidebarState {
  open: boolean;
}

const initialState: SidebarState = {
  open: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebarAction: (_, action) => {
      return action.payload;
    },
  },
});

export const { openSidebarAction } = sidebarSlice.actions;

export const selectOpenSidebar = (state: RootState) => state.sidebar.open;

export type SidebarDispatch = typeof store.dispatch;

export default sidebarSlice.reducer;

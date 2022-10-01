import { createSlice } from "@reduxjs/toolkit";
import { RootState, store } from "../store";

interface AppComponentsState {
  openSidebar: boolean;
  loading: boolean;
}

const initialState: AppComponentsState = {
  openSidebar: false,
  loading: false,
};

export const AppComponentsSlice = createSlice({
  name: "appComponent",
  initialState,
  reducers: {
    setSidebarReducer: (state, action) => {
      return { ...state, openSidebar: action.payload.open };
    },
    setLoaderReducer: (state, action) => {
      return { ...state, loading: action.payload.loading };
    },
  },
});

export const { setSidebarReducer, setLoaderReducer } = AppComponentsSlice.actions;

export const selectAppComponents = (state: RootState) => state.appComponents;

export type AppComponentsDispatch = typeof store.dispatch;

export default AppComponentsSlice.reducer;

import {
	AppComponentsDispatch,
	setLoaderReducer,
} from "../../reducers/appComponentsReducer";

export const setLoadingAction =
	(loading: boolean) => (dispatch: AppComponentsDispatch) => {
		dispatch(setLoaderReducer({ loading }));
	};

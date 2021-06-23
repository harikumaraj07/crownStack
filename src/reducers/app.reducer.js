import { SET_DATA, SET_DETAILS, SET_LOADER, TOGGLE_FULL_SCREEN_LOADING } from '../actions/types';

const initialState = {
  data: [],
  isLoading: false,
  details: {},
  fullScreenLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case SET_LOADER:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case SET_DETAILS:
      return {
        ...state,
        details: action.payload || {},
      };
    case TOGGLE_FULL_SCREEN_LOADING:
      return {
        ...state,
        fullScreenLoading: !state.fullScreenLoading,
      };
    default:
      return state;
  }
};

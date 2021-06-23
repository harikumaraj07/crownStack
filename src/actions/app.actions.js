import futch from '../services/api';
import { SET_LOADER, SET_DATA, SET_DETAILS, TOGGLE_FULL_SCREEN_LOADING } from './types';

export const getDataAction = () => dispatch => {
    dispatch({ type: SET_LOADER });
    return futch('https://itunes.apple.com/search?term=Michael+jackson', 'GET')
        .then(data => {
            dispatch({
                type: SET_DATA,
                payload: data.results || [],
            });
            return data;
        })
        .catch(error => {
            dispatch({ type: SET_LOADER });
            throw new Error(error);
        });
};

export const setDetailsAction = payload => dispatch => dispatch({ type: SET_DETAILS, payload });

export const toggleFullScreenLoadingAction = payload => dispatch => dispatch({ type: TOGGLE_FULL_SCREEN_LOADING });

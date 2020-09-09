import axios from "axios";
export const FETCH_STATS = "FETCH_STATS";
export const FETCH_STATS_SUCCESS = "FETCH_STATS_SUCCESS";
export const FETCH_STATS_ERROR = "FETCH_STATS_ERROR";

export const fetchStats = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_STATS });
        axios
            .get("https://cat-fact.herokuapp.com/facts")
            .then((response) => {
                dispatch({ type: FETCH_STATS_SUCCESS, payload: response.data.all });
            })
            .catch((error) => {
                dispatch({
                    type: FETCH_STATS_ERROR,
                    payload: { message: "Whoops! Can't get your Covid stats for you!" }
                });
            });
    };
};
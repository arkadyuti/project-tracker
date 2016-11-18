import axios from "axios";

export function fetchTrendsChartData () {
	return function (dispatch) {
		axios.get("http://localhost:3000/trends")
		.then((response) => {
			dispatch({type: "FETCH_TRENDS_FULFILLED", payload: response.data})
		})
		.catch((err) => {
			dispatch({type:"FETCH_TRENDS_REJECTED", payload:err})
		})
	}
}	
import axios from "axios";

export function fetchHbarChartData () {
	return function (dispatch) {
		axios.get("http://localhost:3000/skills")
		.then((response) => {
			dispatch({type: "FETCH_HBAR_FULFILLED", payload: response.data})
		})
		.catch((err) => {
			dispatch({type:"FETCH_HBAR_REJECTED", payload:err})
		})
	}
}	
export default function reducer (state = {
	trendChart: {},
	fetching: false,
	fetched: false,
	error: null
}, action) {
	switch (action.type) {
		case "FETCH_TRENDS": {
			return {...state, fetching: true }
		}
		case "FETCH_TRENDS_REJECTED": {
			return {...state, fetching: false, error: action.payload }
		}
		case "FETCH_TRENDS_FULFILLED": {
			return {...state, 
				fetching: false,
				fetched: true,
				trendChart: action.payload
			}
		}		
	}
	return state;
}
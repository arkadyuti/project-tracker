import axios from 'axios';
import React from 'react';
import hBarChartCallBack from "../js/hBarChartD3.js";
class HBarChart extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount(){
		axios.get('http://localhost:3000/skills')
			.then(function (response) {
				hBarChartCallBack(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
    
    componentWillReceiveProps(newProps) {    
		// console.log('Component WILL RECIEVE PROPS!')
	}

	shouldComponentUpdate(newProps, newState) {
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
		// console.log('Component WILL UPDATE!');
	}

	componentDidUpdate(prevProps, prevState) {
		// console.log('Component DID UPDATE!')
	}

	componentWillUnmount() {
		// console.log('Component WILL UNMOUNT!')
	}
	
	render() {
		return (
			
				<div id="wrapper-hbar"></div>

		
		)
	}
}
export default HBarChart;
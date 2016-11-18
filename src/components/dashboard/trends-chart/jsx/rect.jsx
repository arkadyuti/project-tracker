import React from 'react';
import * as d3 from 'd3';
import RectPerQComponent from './rectPerQ.jsx';

class RectComponent extends React.Component{

	 

	constructor(props){
		super(props);

		this.eachRectPerQ = this.eachRectPerQ.bind(this);

		this.state = {
			qData : [],
			maxData : 0
		}
	}

	componentWillMount() {
		var data = this.props.newData;
		var maxData = d3.max(data);
		var q1Data = [],q2Data=[],q3Data=[],q4Data=[];

		for(var i=0;i<data.length;i++){
			if(i<3){
				q1Data.push(data[i]);
			}
			else if(i>=3 && i<6){
				q2Data.push(data[i]);
			}
			else if(i>=6 && i<9){
				q3Data.push(data[i]);
			}
			else{
				q4Data.push(data[i]);
			}
		}

		this.setState({
			qData : [q1Data,q2Data,q3Data,q4Data],
			maxData : maxData
		});

	}
	

	eachRectPerQ(d,i){
		return(
			<RectPerQComponent key={i} group = {i} Q = {d} barData = {this.state.qData[i]} colorData = {this.props.colorData} maxData={this.state.maxData} barHeight={this.props.barHeight} barWidth={this.props.barWidth}  /> 
		)

	}


	render(){	
		return(
			<g>
				{this.props.Qs.map(this.eachRectPerQ)}
			</g>
			)
	}
}

export default RectComponent;
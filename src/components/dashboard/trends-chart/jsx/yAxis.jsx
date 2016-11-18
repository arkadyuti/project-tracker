import React from 'react';
import * as d3 from 'd3';

class YAxisComponent extends React.Component{
	constructor(props){
		super(props);
		this.makeYaxis = this.makeYaxis.bind(this);
		this.state = {
			maxData : d3.max(this.props.newData)
		}
	}

	componentWillMount() {
		
	}	


	makeYaxis(d,i){

		var tickHeight = this.props.barHeight - this.props.barHeight*i/5;
		
		return (
				<g className = "tick" key={i} transform={`translate(0,${tickHeight})`}>
					<line x2="-6" y2="0"></line>
					<text dy=".32em" x="-9" y="0" styles={"textAnchor: end"}>{d}</text>
				</g>
			)
	}

	render(){
		var arr = [],i=0,ticks=0;
		var divlength = this.state.maxData/5;
		
		while(i<=this.state.maxData){
			ticks++;			
			arr.push(i);
			i+=divlength;
		}
		
		
		var yScale = d3.scaleLinear()
					  .domain([this.state.maxData,0])
					  .range([0,(this.props.barHeight)]);
		var vAxis = d3.axisLeft()
					  .scale(yScale)
					  .ticks(4);
			

		return (
				<g transform = "translate(30,45)" >
					{arr.map(this.makeYaxis)}
				</g>
			)
	}
}

export default YAxisComponent;
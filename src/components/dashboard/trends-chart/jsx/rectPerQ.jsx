import React from 'react';


class RectPerQComponent extends React.Component{

	constructor(props){
		super(props);
		this.eachRect = this.eachRect.bind(this);
		this.state = {
			width : 15
		}
	}


	

	eachRect(d,i){
		var barHeight=this.props.barHeight;
		var coor = (this.props.group)*20+50;
		var height = d/(this.props.maxData)*barHeight;
		var y = barHeight - height;
		return(
			<rect key={i} x={coor+i*15} width={this.state.width} fill={this.props.colorData[i]} y={y} height={height} /> 
			)
		}
	render(){
		var xcoor = (this.props.group)*50;
		return(
			<g transform={`translate(${xcoor},50)`} >
				{this.props.barData.map(this.eachRect)}
			</g>
			)
	}
}

export default RectPerQComponent;
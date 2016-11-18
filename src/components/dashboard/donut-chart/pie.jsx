import React from 'react'
import Arc from './Arc.jsx'
import * as d3 from 'd3'
import Legend from './Legend.jsx'

var Pie = React.createClass({
	getInitialState() {
		return{
			arrayColor:[]
		}
	},
	componentWillMount(){
		var func = d3.scaleOrdinal(d3.schemeCategory10);
		this.arraycolor = [];
		if(this.props.color.length === 0){
		for(var j=0;j<this.props.data.length;j++){
			this.arraycolor.push(func(j))
			}
		}
		else {this.arraycolor = this.props.color};
	},

	render() {
		var pie = d3.pie();
		var x = 100,
			y = -100;
			
		return(
			<g transform={`translate(${this.props.x}, ${this.props.y})`}>
			{pie(this.props.data).map(this.pieSlice)}
			<Legend x={x} y={y} color={this.arraycolor} label={this.props.label} />
			</g>
			)
	},
	pieSlice(value,i) {
		return(
		<Arc key={i} outerRadius={this.props.radius}
             value={value}
             fill={this.colour(i)} />);
	},
	colour(i,flag){
		return this.arraycolor[i]
	}
})

export default Pie 
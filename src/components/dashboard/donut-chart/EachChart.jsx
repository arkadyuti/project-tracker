import React from 'react'
import Pie from './pie.jsx'

var EachChart = React.createClass({
	getInitialState() {
		return {

		}
	},
	componentWillMount() {

	},
	render() {
		var radius = Math.min(800, 300) / 2,
    		x = this.props.x,
    		y = this.props.y,
    		data = [],
    		color=[],
    		label=[];

    	for(var key in this.props.data){
    		data.push(this.props.data[key].value);
    	}

    	
    	for(var key in this.props.data){
    		if(this.props.data[0].label=="red"){
    		color.push(this.props.data[key].label);
    		}
    		label.push(this.props.data[key].label);

    	}

		return (
			<Pie x={x} y={y} radius={radius} data={data} color={color} label={label}/>

			)
		}
})

export default EachChart 
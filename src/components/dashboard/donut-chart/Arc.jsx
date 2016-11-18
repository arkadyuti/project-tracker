import React from 'react'
import * as d3 from 'd3'

var Arc = React.createClass({
	componentDidMount(){
		
	},
	render() {
		var arc = d3.arc()
    		.innerRadius(this.props.outerRadius - 100)
    		.outerRadius(this.props.outerRadius - 50);

    		
    		return (
    			 <path d={arc(this.props.value)} fill={this.props.fill} />)
	}
})

export default Arc 
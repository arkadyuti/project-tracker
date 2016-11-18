import React from 'react'
import * as d3 from 'd3'

var Legend = React.createClass({
	componentDidMount(){
		
	},
	componentWillUpdate() {
		this.y = 0;
	},
	legendGroup(value,i) {
		var rectStyle = {
                fill:this.props.color[i],
                stroke:this.props.color[i]

            };

        this.y = this.y || 0;
        this.y = this.y +30;
        this.x = 10;
		var transform="translate("+this.x+","+this.y+")";

		return(
			<g key={i} transform={transform}>
			<rect width="10" height="10" style={rectStyle}></rect>
			<text x="20" y="10">{this.props.label[i]}</text>
			</g>
			)
	},
	render() {
		return(<g transform={`translate(${this.props.x}, ${this.props.y})`} >
			{this.props.color.map(this.legendGroup)}
			</g>)
	}
})

export default Legend
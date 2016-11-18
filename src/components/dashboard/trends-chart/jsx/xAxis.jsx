import React from 'react';
import * as d3 from 'd3';

class XAxisComponent extends React.Component{
	constructor(props){
		super(props);
		this.makeXaxis = this.makeXaxis.bind(this);
	}

	makeXaxis(d,i){
		var tickWidth = 280*i/4+35;
		return(
				<g className="tick" key={i} transform={`translate(${tickWidth},0)`}>
					<line y2="6" x2="0"></line>
					<text dy=".71em" y="9" x="0" styles={"textAnchor: end"}>{d}</text>
				</g>
			)
	}

	render(){
		return (
				<g transform = "translate(30,260)" >
					{this.props.Qs.map(this.makeXaxis)}
				</g>
			)
	}
}

export default XAxisComponent;
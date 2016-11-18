import React from 'react';
import makeChart from "../js/WorkWithD3.js";
import RectComponent from './rect.jsx';
import LegendComponent from './legend.jsx';
import YAxisComponent from './yAxis.jsx';
import XAxisComponent from './xAxis.jsx';

class BarChartComponent extends React.Component {
	constructor(props) {
		super(props);
		this.changeData = this.changeData.bind(this);
		this.state = {
		  	newData : [],
		  	colorNames : [],
		    colorData : ["#f26945","#1ec4c2","#fdd04f"],
		    currentYear : 2015,
		    Qs : ["Q1","Q2","Q3","Q4"],
		    barHeight : 210,
		    barWidth : 800
		}
	}

	componentWillMount() {
		console.log('Component DID MOUNT!')

		var data1 = {
			"least_year": 2014,
			"total": 69,
			"current": 2015,
			"yearData": {
				"Q1": {
					"RED": 2,
					"GREEN": 18,
					"AT RISK": 11
				},
				"Q2": {
					"RED": 5,
					"GREEN": 42,
					"AT RISK": 20
				},
				"Q3": {
					"RED": 0,
					"GREEN": 63,
					"AT RISK": 5
				},
				"Q4": {
					"RED": 10,
					"GREEN": 100,
					"AT RISK": 10
				}
			}
		};

		var colordata=[],newdata=[],colornames=[];

		
		for(var color in data1.yearData["Q1"]){
			colornames.push(color);
		}


		for(var key in data1.yearData){
			for(var key1 in data1.yearData[key])
				newdata.push(data1.yearData[key][key1]);
		}

		this.setState({
			newData : newdata,
			colorNames : colornames,
			currentYear : data1.current
		});

	}

	changeData(){
		this.setState({
			currentYear : this.state.currentYear-1
		})
	}


	
	render() {

		console.log("inside render")
		return (
			 <div id="bar-chart">
			 	<input type="button" className="year-btn" value="<" onClick={this.changeData}/>
				<span className="year-display">{this.state.currentYear}</span>
			 	<LegendComponent colorNames = {this.state.colorNames} colorData = {this.state.colorData} />
				 <svg height="100%" width="100%">
				 <RectComponent barHeight={this.state.barHeight} barWidth={this.state.barWidth} Qs={this.state.Qs} newData={this.state.newData} colorData = {this.state.colorData} />
				 
				 <YAxisComponent barHeight={this.state.barHeight} barWidth={this.state.barWidth} newData={this.state.newData}  Qs={this.state.Qs}/>
			
				 
				 <XAxisComponent barHeight={this.state.barHeight} barWidth={this.state.barWidth} newData={this.state.newData} Qs={this.state.Qs}/>
				 
				 </svg>
			</div>
			);

	}
}
export default BarChartComponent;

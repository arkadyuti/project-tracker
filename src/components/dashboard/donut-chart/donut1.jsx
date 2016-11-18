import React from 'react'
import EachChart from './EachChart.jsx'

var DonutChart = React.createClass({
	getInitialState() {
		return {	
			data:{
				"status" : [
				{
					"label" : "red",
					"value" : "10"
				},
				{
					"label" : "green",
					"value" : "10"
				},
				{
					"label" : "blue",
					"value" : "10"
				}
				],
				"location" : [
				{
					"label" : "BRL",
					"value" : "10"
				},
				{
					"label" : "GGN",
					"value" : "10"
				},
				{
					"label" : "OTHERS",
					"value" : "10"
				},
				{
					"label" : "OTHERS",
					"value" : "20"
				},
				{
					"label" : "OTHERS",
					"value" : "30"
				}
				],
				"scg" : [
				{
					"label" : "SCG1",
					"value" : "10"
				},
				{
					"label" : "SCG2",
					"value" : "10"
				},
				{
					"label" : "SCG3",
					"value" : "10"
				}
				]
			},
			x:["status","location","scg"]
		}
	},
	componentWillMount() {
		
	},	
	nextId() {
		this.uniqueId = this.uniqueId || 0
         return this.uniqueId++
    },
    shouldComponentUpdate() {

    },
    componentWillUpdate() {
    	this.x = 0;
    },
   	drawEachChart(obj) {
   		this.x = this.x || 0;
   		this.x = this.x+320;
   		this.y = 150;
   		var radius = 75;
   		return(
   			<EachChart key={this.nextId()} data = {this.state.data[obj]} x={this.x} y={this.y} />
   			) 
   	},
	render() {
		var object = this.state.data;
		var width = 1200,
			height = 300,
			radius = Math.min(width, height) / 2;	
			
		return (
			<svg width={width} height={height}>
			{this.state.x.map(this.drawEachChart)}
			</svg>
			)
		}
	})

export default DonutChart;
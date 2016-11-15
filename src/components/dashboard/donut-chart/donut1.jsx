import * as d3 from 'd3'
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
	componentDidMount() {
        
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
   		this.x = this.x+230;
   		this.y = 150;
   		var radius = 75;
   		return(
   			<EachChart key={this.nextId()} data = {this.state.data[obj]} x={this.x} y={this.y} />) 
   	},
	render() {
		
		var object = this.state.data;
		var width = document.documentElement.clientWidth,
			height = 300,
			margin = 5,
			radius = Math.min(width, height) / 2;	
		
		var x = d3.scaleLinear()
			    .range([0, width])
			    .domain([0, .4]); 
		function resize () {
		// update width
	    width = parseInt(d3.select('.donut-board').style('width'), 10);
	    // width = width - margin.left - margin.right;

	    // reset x range
	    x.range([0, width]);
	    
	    return width;
		}
		

		return (<div className='donut-board'>

			<svg width={width} height={height}>
			{this.state.x.map(this.drawEachChart)}
			</svg>
			</div> )
		}
	})
	
export default DonutChart
/*
var Chart = (function(window,d3) {

  var svg, data, x, y, xAxis, yAxis, dim, chartWrapper, line, path, margin = {}, width, height;

  d3.csv('data.csv', init); //load data, then initialize chart

  //called once the data is loaded
  function init(csv) {
    data = csv;

    //initialize scales
    xExtent = d3.extent(data, function(d,i) { return new Date(d.date) });
    yExtent = d3.extent(data, function(d,i) { return d.value });
    x = d3.time.scale().domain(xExtent);
    y = d3.scale.linear().domain(yExtent);

    //initialize axis
    xAxis = d3.svg.axis().orient('bottom');
    yAxis = d3.svg.axis().orient('left');

    //the path generator for the line chart
    line = d3.svg.line()
      .x(function(d) { return x(new Date(d.date)) })
      .y(function(d) { return y(d.value) });

    //initialize svg
    svg = d3.select('#chart').append('svg');
    chartWrapper = svg.append('g');
    path = chartWrapper.append('path').datum(data).classed('line', true);
    chartWrapper.append('g').classed('x axis', true);
    chartWrapper.append('g').classed('y axis', true);

    //render the chart
    render();
  }

  function render() {

    //get dimensions based on window size
    updateDimensions(window.innerWidth);

    //update x and y scales to new dimensions
    x.range([0, width]);
    y.range([height, 0]);

    //update svg elements to new dimensions
    svg
      .attr('width', width + margin.right + margin.left)
      .attr('height', height + margin.top + margin.bottom);
    chartWrapper.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    //update the axis and line
    xAxis.scale(x);
    yAxis.scale(y);

    svg.select('.x.axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);

    svg.select('.y.axis')
      .call(yAxis);

    path.attr('d', line);
  }

  function updateDimensions(winWidth) {
    margin.top = 20;
    margin.right = 50;
    margin.left = 50;
    margin.bottom = 50;

    width = winWidth - margin.left - margin.right;
    height = 500 - margin.top - margin.bottom;
  }

  return {
    render : render
  }

})(window,d3);*/
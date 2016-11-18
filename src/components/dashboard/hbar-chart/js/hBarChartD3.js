import * as d3 from 'd3';


export default function hBarChartCallBack (response) {
window.addEventListener("resize",somefun);
renderHbar();
function somefun () {
	// console.log(window.innerWidth);
	var c=document.getElementById('wrapper-hbar').offsetWidth;
	// renderHbar(c);
}
	function renderHbar (c) {
		let frameworks = [],
	    values = [];
		for(var i=0;i<response.length;i++){
			frameworks[i] = response[i].label;
			values[i] = parseInt(response[i].value);
		}
	    

		let canvas = d3.select('#wrapper-hbar')
						.attr('width','100%')
						.attr('height','350px')
						.style('background','pink')
						.append('svg')
						.attr('width','100%')
						.attr('height','350px');
		let colors = ['#00BFFF'];

		let xWidth = d3.min([window.innerWidth-200,420]);


		let xscale = d3.scaleLinear()
						.domain([0,d3.max(values)])
						.range([0,xWidth]);

		let yscale = d3.scaleBand()
					.domain(frameworks)
					.range([0,300]);

		let colorScale = d3.scaleQuantize()
						.domain([0,frameworks.length])
						.range(colors);

		

		let	xAxis = d3.axisTop(xscale)
					.tickArguments([10])
					.tickSize(1);


		let	yAxis = d3.axisLeft(yscale)
					.tickArguments([frameworks.length])
					.tickSize(1);

		let y_xis = canvas.append('g')
						.attr('transform', 'translate(85,20)')
						.attr('id','yaxis')
						.call(yAxis)
						.style('font-size','10px');
		
		let x_xis = canvas.append('g')
						.attr('transform', 'translate(85,20)')
						.attr('id','xaxis')
						.call(xAxis)
						.style('font-size','10px');

		let chart = canvas.append('g')
						.attr('transform', 'translate(86,20)')
						.attr('id','bars')
						.selectAll('rect')
						.data(values)
						.enter()
						.append('rect')
						.attr('height',20)
						.attr('x','0')
						.attr('y',function(d,i){ return i*(300/11)+8; })

						.style('fill',function(d,i){ return colorScale(i); })
						.attr('width',function(d){ return 0;});
	 	
	    let abc,def,did;
		let transit = d3.select('svg').selectAll('rect')
						.data(values)
						.transition()
						.duration(1000) 
						.attr('width', function(d) {
							 abc = xscale(d);
							 def = (xscale(d)/610.8)*100;
							 did = def+'%';

							return abc;

						 });
						
						
		let transitext = d3.select('#bars')
							.selectAll('text')
							.data(values)
							.enter().append('text')
							.attr('x',function(d){return xscale(d);})
							.attr('y',function(d,i){ 
							return i*(300/11)+20;})
							.text(function(d){ return d; }).style({'fill':'black','font-size':'14px'});


		

		window.addEventListener('resize', chart.render);
	}
	

}
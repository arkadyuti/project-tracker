
import Arc from './Arc.jsx'
import * as d3 from 'd3'

var Pie = React.createClass({

	componentDidMount(){
		
	},


	render() {
		var pie = d3.pie();

		return(
			<g transform={`translate(${this.props.x}, ${this.props.y})`}>
			{pie(this.props.data).map(this.slice)}
			</g>
			)
	},
	slice(value,i) {
		var color = ["red","green","blue"]
		return(
		<Arc key={i} outerRadius={this.props.radius}
             value={value}
             fill={color[i]} />)
	}
})

export default Pie 
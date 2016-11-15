
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
    		color=[];

    	for(var key in this.props.data){
    		data.push(this.props.data[key].value);
    	}

    	if(this.props.data[0].label=="red"){
    	for(var key in this.props.data){
    		color.push(this.props.data[key].label);
    	}
    }

		return (
			<Pie x={x} y={y} radius={radius} data={data} color={color} />
			)
		}
})

export default EachChart 
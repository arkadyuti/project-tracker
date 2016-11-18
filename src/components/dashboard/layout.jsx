import {connect} from "react-redux";
import {fetchTrendsChartData} from "../../actions/charts/trends-chart"

import DonutChart from './donut-chart/donut1.jsx';
import HBarChart from './hbar-chart/jsx/hBarChart.jsx';
// import BarChartComponent from './trends-chart/jsx/BarChart.jsx';

@connect((store) => {
	return{
		chartdata: store.payload
	};
})

class Layout extends React.Component {
	componentWillMount(){
		this.props.dispatch(fetchTrendsChartData());
	}
	render() {
		const { data } = this.props;
		console.log(data)
		return (
			<section className="charts-container">
				<div className="growth-chart col-sm-6">
					<div className="chart-name">GROWTH</div>
					<div className="chart-wrapper">
						{data}
					</div>
				</div>
				<div className="skill-based-chart col-sm-6">
					<div className="chart-name">Skill Based Chart for Projects</div>
					<div className="chart-wrapper">
						<HBarChart />
					</div>
				</div>
				<div className="status-chart col-sm-12">
					<div className="chart-name">Status</div>
					<div className="chart-wrapper">
						{<DonutChart />}
					</div>
				</div>
				<div className="clear-both"></div>
			</section>
		);
	}
}

export default Layout;
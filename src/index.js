import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import './styles/charts.scss';

import Layout from './components/dashboard/layout.jsx';
import store from "./store/charts-store"

ReactDOM.render(<Provider store={store}> 
	<Layout /> 
	</Provider> , document.getElementById('root'));
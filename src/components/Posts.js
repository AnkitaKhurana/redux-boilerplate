import React , {Component} from 'react';
import { connect } from 'react-redux';
import {fetchNow} from '../actions/work';

// connect: connects components to redux store, provided by Provider component

class Posts extends Component {
	componentWillMount (){
		this.props.fetchNow();
	}
	render() {
		return (
			<div>
				<h1>Api Result</h1>
				<p>{this.props.res}</p>
			</div>
		)
	}
}

const mapStateToProps = state =>({
	res : state.temp.items
})


export default connect(mapStateToProps,{fetchNow})(Posts);
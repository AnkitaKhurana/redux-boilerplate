import React , {Component} from 'react'

class Posts extends Component {

	constructor(props)
	{
		super(props);
		this.state = {
			result : ""

		}
	}

	componentWillMount(){
		fetch('http://localhost:4000')
		.then(res => res.json())
		.then(data => //console.log(data.meta.provided_by))
			this.setState({result :data.meta.provided_by}));
					// console.log(data))
		console.log(this.state.result)
	} 

	render() {
		// // const Items = this.state.result.map(res => (
		// 	<div key = {res}>{res}</div>
		// 	)
		// );
		return (
			<div>
				<h1>Api Result</h1>
				<p>{this.state.result}</p>
			</div>
		)
	}
}




export default Posts;
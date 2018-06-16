import React , {Component} from 'react'



class Postform extends Component {

	constructor(props)
	{
		super(props);
		this.state = {
			name : "",
			password : "",
			show :"showing"

		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

	}
	onChange(event){
		this.setState({[event.target.name]:event.target.value});
	}
	onSubmit(event)
	{
		console.log('On submit')
		this.setState({show:'CKICJKED'})
		event.preventDefault();
		

		const post = {
			name : this.state.name,
			password : this.state.password
		}
		fetch('http://localhost:4000/admin',{
			method : 'post',
			header :{
				'constent-type' :"application/json"
			},
			body :JSON.stringify(post)
		}).then(res => res.json())
		.then(data => this.setState({show:data.results}))
	}

	render() {
		
		return (
			<div>
				<h1>Add Post</h1>
				<p>{this.state.show}</p>
				<form onSubmit={this.onSubmit}>
					<div>
					<label>Name : </label><br/>
					<input name="name" type="text" onChange={this.onChange} value={this.state.name}/> 
					<label>Password : </label><br/>
					<input name="password" type="text" onChange={this.onChange} value={this.state.password}/>
					</div>
					<button type='submit' onSubmit={this.onSubmit}>Login</button>
					</form>
			</div>
		)
	}
}




export default Postform;
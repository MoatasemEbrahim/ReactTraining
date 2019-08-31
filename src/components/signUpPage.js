import React from 'react'
import { Link } from 'react-router-dom'
import Input from './input'
class SignUp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email:'',
			password:'',
			confirmedPassword:''
		};
	
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	  }

	handleSubmit = (e)=>{
		e.preventDefault();
		let users = window.localStorage.getItem('users');
		if(!users){
			users = []
		}else{
			users = JSON.parse(users)
		}
		let user = Object.assign({}, this.state);
		user.id = this.idGenerator()
		users.push(user)
		window.localStorage.setItem('users', JSON.stringify(users));

		this.props.history.push('/profile')

	}

	idGenerator = function () {
		return '_' + Math.random().toString(36).substr(2, 9);
	  };

	handleChange = (e)=>{
		this.setState({[e.target.name]:e.target.value})
	}


  render() {
    return (
        <div className="container h-100 pt-5">
		<div className="d-flex justify-content-center h-100 mt-5">
			<div className="user_card">
				<div className="d-flex justify-content-center">
					<div className="brand_logo_container">
                        <h3 className="logo_text mt-4"><Link className="logo_text" to="/">Home</Link></h3>
                    </div>
				</div>
				<div className="d-flex justify-content-center form_container">
					<form onSubmit={this.handleSubmit}>
						
					<Input name="username" handleChange={this.handleChange} value={this.state.username} type="text" icon="fas fa-user" placeholder="Username"/>
					<Input name="email" handleChange={this.handleChange} value={this.state.email} type="text" icon="fas  fa-envelope-square" placeholder="Email"/>
					<Input name="password" handleChange={this.handleChange} value={this.state.password} type="password" icon="fas fa-key" placeholder="Password"/>
					<Input name="confirmedPassword" handleChange={this.handleChange} value={this.state.confirmedPassword} type="password" icon="fas fa-key" placeholder="Confirm Password"/>
                        <div className="d-flex justify-content-center mt-3 login_container">
                            <button type="submit" name="button" className="btn login_btn">Sign Up</button>
                        </div>
					</form>
				</div>
                <div className="mt-4">
					<div className="d-flex justify-content-center links">
						I already have an account? <Link className="ml-2" to="/signin">Sign In</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
  }
}
export default SignUp
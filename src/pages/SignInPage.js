import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/input'

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email:'',
			password:'',
		};
	
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		}


		handleSubmit = (e)=>{
			e.preventDefault();
			let users = window.localStorage.getItem('users');
			if(!users){
				alert("You have entered wrong username or password")
				return
			}else{
				users = JSON.parse(users)

			}

			if(this.checkUser(users,this.state)){
				this.props.history.push({pathname: '/profile',state: { canLogin: true }})
			}else{
				alert("You have entered wrong username or password")
			}
	
		}
	
		checkUser = function(users,candidate){
			let flag = false
			users.forEach(function(user){
				if(user.email === candidate.email && user.password === candidate.password)
				{
					flag = true
					return
				}
			})
			return flag;
		}
	
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
						
					<Input name="email" handleChange={this.handleChange} value={this.state.email} type="text" icon="fas  fa-envelope-square" placeholder="Email"/>
					<Input name="password" handleChange={this.handleChange} value={this.state.password} type="password" icon="fas fa-key" placeholder="Password"/>
						<div className="form-group">
							<div className="custom-control custom-checkbox">
								<input type="checkbox" className="custom-control-input" id="customControlInline"/>
								<label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
							</div>
						</div>
						<div className="d-flex justify-content-center mt-3 login_container">
								<button type="submit" name="button" className="btn login_btn">Login</button>
						</div>
					</form>
				</div>
				<div className="mt-4">
					<div className="d-flex justify-content-center links">
						Don't have an account? <Link className="ml-2" to="/signup">Sign Up</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
  }
}
export default SignIn
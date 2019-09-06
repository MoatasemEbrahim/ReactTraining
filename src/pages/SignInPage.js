import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/input'
import {Formik} from 'formik'
import * as yup from 'yup'




const yupSchema = yup.object().shape({
	email: yup
	.string('The email you have entered has some special charchters')
	.required('The email is required')
	.email('You should enter a valid email')
	.max(100),
	password: yup
	.string('The email you have entered has some special charchters')
	.min(8,'Password should be more than or equal 8 charcters')
	.required()
})
	

	

	
const checkUser = function(users,candidate){
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
	
	

const SignIn = function (props) {
	return (
		<Formik

		initialValues={{
			email: "",
			password: ""
		}}
		
		
		validationSchema={yupSchema}

		onSubmit={(values, { setSubmitting, resetForm }) => {
			setSubmitting(true);
			let users = window.localStorage.getItem('users');
			if(!users){
				alert("You have entered wrong username or password")
				return
			}else{
				users = JSON.parse(users)
			}

			if(checkUser(users,values)){
				props.history.push({pathname: '/profile',state: { canLogin: true }})
			}else{
				alert("You have entered wrong username or password")
			}
		}}
		>
			{({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue
      }) => (
		<div className="container h-100 pt-5">
			<div className="d-flex justify-content-center h-100 mt-5">
				<div className="user_card">
					<div className="d-flex justify-content-center">
						<div className="brand_logo_container">
							<h3 className="logo_text mt-4"><Link className="logo_text" to="/">Home</Link></h3>
						</div>
					</div>
					<div className="d-flex justify-content-center form_container">
						<form onSubmit={handleSubmit}>
							<Input 
							name="email" 
							handleChange={handleChange} 
							value={values.email} 
							type="text" 
							icon="fas fa-envelope-square" 
							placeholder="Email"
							blur={handleBlur}
							error={touched.email && errors.email ? errors.email : null}/>

							<Input 
							name="password" 
							handleChange={handleChange} 
							value={values.password} 
							type="password" 
							icon="fas fa-key" 
							placeholder="Password"
							blur={handleBlur}
							error={touched.password && errors.password ? errors.password : null}/>

							<div className="form-group">
								<div className="custom-control custom-checkbox">
									<input type="checkbox" name="rememberMe" className="custom-control-input" id="customControlInline"/>
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
			)}
		</Formik>
	)
}
export default SignIn
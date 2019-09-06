import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/input'
import {Formik} from 'formik'
import * as yup from 'yup'



const check_email_exist_before = function(email){
	let users = window.localStorage.getItem('users');
	let emailIsNew = true
	if(users){
		users = JSON.parse(users)
		emailIsNew = users.every(user=> user.email !== email)
	}
	
	if(emailIsNew)
		return true
	return false
	}

const yupSchema = yup.object().shape({
	username: yup
	.string('The username you have entered has some special charchters')
	.required('The email is required')
	.min(2,'Username should be more than or equal 2 charcters')
	,
	email: yup
	.string('The email you have entered has some special charchters')
	.required('The email is required')
	.email('You should enter a valid email')
	.max(100)
	.test("newEmail", "This email is already registerd",check_email_exist_before),

	password: yup
	.string('The email you have entered has some special charchters')
	.min(8,'Password should be more than or equal 8 charcters')
	.required(),

	confirmedPassword: yup
	.string('The email you have entered has some special charchters')
	.min(8,'Password should be more than or equal 8 charcters')
	.required()
})

const idGenerator = function () {
	return '_' + Math.random().toString(36).substr(2, 9);
	};

const register = (inputs,props)=>{
	let users = window.localStorage.getItem('users');
	if(!users){
		users = []
	}else{
		users = JSON.parse(users)
	}
	let user = {username:inputs.username,email:inputs.email,password:inputs.password}
	user.id = idGenerator()
	users.push(user)
	window.localStorage.setItem('users', JSON.stringify(users));
	props.history.push('/profile')
	return true
}

	

 const SignUp = function(props){
    return (
			<Formik

			validateOnBlur={false}
			validateOnChange={false}
			initialValues={{
				username: '',
				email:'',
				password:'',
				confirmedPassword:''
			}}

			validationSchema={yupSchema}

			onSubmit={(values, { setSubmitting, resetForm }) => {
				setSubmitting(true);
				register(values,props)
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
						
					<Input name="username" handleChange={handleChange} value={values.username} type="text" icon="fas fa-user" 
					placeholder="Username" blur={handleBlur} error={touched.username && errors.username ? errors.username : null}/>
					
					<Input name="email" handleChange={handleChange} value={values.email} type="text" icon="fas  fa-envelope-square" 
					placeholder="Email" blur={handleBlur} error={touched.email && errors.email ? errors.email : null}/>
					
					<Input name="password" handleChange={handleChange} value={values.password} type="password" icon="fas fa-key" 
					placeholder="Password" blur={handleBlur} error={touched.password && errors.password ? errors.password : null}/>
					
					<Input name="confirmedPassword" handleChange={handleChange} value={values.confirmedPassword} type="password" icon="fas fa-key" 
					placeholder="Confirm Password" blur={handleBlur} error={touched.confirmedPassword && errors.confirmedPassword ? errors.confirmedPassword : null}/>
					
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
			)}
	</Formik>
    )
}
export default SignUp

import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        console.log('here is home')
        
        return (
            <div className="text-center container h-100 pt-5">
                <div className="text-center h-100 mt-5">
              <div>
                <h2>Welcome to our app</h2>
              </div>
              <div className="mt-3">
                <button className="btn mr-4" type="button"><span><Link to="/signin">Login</Link></span> </button>
                <button className="btn ml-4" type="button"><span><Link to="/signup">Sign up</Link></span> </button>
              </div>
                </div>
            </div>
          );
  }
}
export default Home


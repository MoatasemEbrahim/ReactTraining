import React from 'react'
import { Link } from 'react-router-dom'

class Profile extends React.Component {
    render() {

    return (
    <div>
      <div className="text-center container h-100 pt-5">
        <div className="text-center h-100 mt-5">
          <div>
            <h2>My Profile</h2>
          </div>
          <div className="mt-3">
          
          <button className="btn" type="button"><span><Link to="/">Home</Link></span> </button>

          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default Profile

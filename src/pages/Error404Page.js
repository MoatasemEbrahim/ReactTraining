import React from 'react'
import {Link} from 'react-router-dom'

class Error404 extends React.Component {
  render() {
    return (
    <div>
        <h1>Error 404</h1>
        <h3><Link to="/">Home</Link></h3>
    </div>
    )
  }
}
export default Error404
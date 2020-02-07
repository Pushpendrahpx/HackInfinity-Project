import React, { Component } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
class Footer extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div className='Footer_container'>
                
                <Link to='/home' className="Footer_item ripple">Home</Link>
                <Link to='/totalbill' className="Footer_item ripple">Consumption</Link> {/* Energy Optimisation */}
                <Link to='/notification' className="Footer_item ripple">Notifications</Link>
                <Link to='/profile' className="Footer_item ripple">Profile</Link>
            </div>
        )
    }
}

export default Footer
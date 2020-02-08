import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

import './Profile.css';
class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                    <div className='Profile-Container'>
                    <img  className='User-Photo ripple' style={{height:'200px'}} src='https://avatars0.githubusercontent.com/u/24816726?v=4' />
                    <div className='User-Profile ripple'>
                            <i className='fa fa-users userprofilename'></i>Pushpendra Vishwakarma
                            <br />
                            <i className='fa fa-envelope'></i> pushpendra.hpx2001@gmail.com
                    </div>

                    <div className='Profile-bar'>

                    </div>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default Profile

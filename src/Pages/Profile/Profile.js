import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

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
                <ul>
                    <div className='Profile'></div>
                </ul>
                <Footer />
            </div>
        )
    }
}

export default Profile

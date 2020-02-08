import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './Notification.css'
class Notification extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
        // List of Notification Data - 
        // 1. Notify Title
        // 2. body
        /* 3. Optimization
              Warning
              On-Off Lock Room
        // Leaderboard - GitHub
        // User Profile - Photu, Naam, Adres, Phone Number, score(init = 0), email 
        

        */
    }

    render() {
        return (
            <span>
                <Navbar />
                <div className='Notification-Container'>
                    <div className='Notification'>
                        <div className='Notification-Content'>
                            Your Bill Amount Reached
                        </div>
                    </div>
                    <div className='Notification'>
                        <div className='Notification-Content'>
                            Your Bill Amount Reached
                        </div>
                    </div>
                </div>
                <Footer />
            </span>
        )
    }
}

export default Notification;
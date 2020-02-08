import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './History.css';
class History extends Component {
    constructor(props) {
        super(props)
        
        this.progressStatus = [0,30,45,60,75,90,95,100];
        // Status - 30, 45, 60,75,90,95
        this.classOfProgessStatus = "pie-wrapper progress-"+this.progressStatus[7];
        this.state = {
            progressBarPercentage:this.classOfProgessStatus
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                    <div className='History-Container'>
                    
                    <div className="row">
                        <div class="set-size charts-container">
                            <div class={this.state.progressBarPercentage}>
                                <span class="label">90</span>
                                <div class="pie">
                                    <div class="left-side half-circle"></div>
                                    <div class="right-side half-circle"></div>
                                </div>
                            </div>

                        </div>
                    <div className='lead'>
                       
                        Previous Consumption
                    </div>
                    </div>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default History

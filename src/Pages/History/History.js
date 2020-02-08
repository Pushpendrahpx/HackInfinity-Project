import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './History.css';
class History extends Component {
    constructor(props) {
        super(props)
        let userdata = localStorage.getItem('userdata');
        let User = JSON.parse(userdata);

        this.progressStatus = [0,30,45,60,75,90,95,100];
        // Status - 30, 45, 60,75,90,95
        this.classOfProgessStatus = "pie-wrapper progress-"+this.progressStatus[7];
        this.state = {
            progressBarPercentage:this.classOfProgessStatus,
            userData:User[0]
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
                                <span class="label">{this.state.userData.score}<small className='smaller'>%</small></span>
                                <div class="pie">
                                    <div class="left-side half-circle"></div>
                                    <div class="right-side half-circle"></div>
                                </div>
                            </div>

                        </div>
                        <div className='Consumption-Container lead'>
                            <br /><br />
                            <div className='Card-title' style={{transform: "translateX(-15px)"}}>
                                Yesterday's Bill is of $43.32
                            </div>
                        </div>
                    </div>
                            <div className='Card-title'>
                                Bill on 28 Jan 2018 $43.32
                            </div>
                            <div className='Card-title'>
                                Yesterday's Bill is of $43.32
                            </div>
                            <div className='Card-title'>
                                Yesterday's Bill is of $43.32
                            </div>
                            <div className='Card-title'>
                                Yesterday's Bill is of $43.32
                            </div>
                            <div className='Card-title'>
                                Yesterday's Bill is of $43.32
                            </div>
                            <div className='Card-title'>
                                Yesterday's Bill is of $43.32
                            </div>
                            <div className='Card-title'>
                                Yesterday's Bill is of $43.32
                            </div><br />
                            <div className='Card-title' style={{fontSize:'20px'}}>
                                Load More . . .
                            </div>
                            <br /><br /><br />
                    </div>
                <Footer />
            </div>
        )
    }
}

export default History

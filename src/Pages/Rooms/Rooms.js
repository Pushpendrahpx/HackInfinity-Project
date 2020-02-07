import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Rooms.css'
import Footer from '../../Components/Footer/Footer';
class Rooms extends Component{
    constructor(props){
        super(props)

        let {roomname} = this.props.match.params;
        this.state = {
            roomname:roomname,
            appliances:[],
            isappliances:false
        }
    }

    async componentDidMount(){
        let response = await fetch('https://api.github.com/users/Pushpendrahpx/followers');
        let data = await response.json();

        this.setState(
            {
                appliances:data,
                isappliances:true
            },
            ()=>{
                console.log("Fetched")
            }
        );
    }


    render(){
        return(
            <div className='container'>
                <Navbar />
                <div className='roomContainer'>
                    <div className='rooms-title ripple' style={{padding:'10px'}}>
                        {this.state.roomname }
                    </div>
                    <div className='row'>
                        {
                            this.state.appliances.map(
                                appliance =>{
                                    return(<div key={appliance.id} className='card ripple'>
                                        
                                            <div className='lead'>
                                                {appliance.login}
                                                <br />
                                                {appliance.id}
                                            </div>
                                        
                                    </div>);
                                }
                            )
                        }
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Rooms
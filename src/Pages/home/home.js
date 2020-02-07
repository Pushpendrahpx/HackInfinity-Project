import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './home.css'

class home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            LeaderboardData:[],
            bio:''
        }


        this.getLeaderboardData = this.getLeaderboardData.bind(this);



        this.Rooms = [
            {
                name:"Living Room",
                icon:'https://image.flaticon.com/icons/svg/2321/2321390.svg',
                devices:[
                    {
                        name:"Television",
                        power:"25W",
                        bill:"10"
                    },
                    {
                        name:"Air Conditioner",
                        power:"50W",
                        bill:"40"
                    }
                ]
            },
            {
                name:"Bed Room",
                icon:'https://image.flaticon.com/icons/svg/2321/2321390.svg',
                devices:[
                    {
                        name:"Television",
                        power:"25W",
                        bill:"10"
                    },
                    {
                        name:"Air Conditioner",
                        power:"50W",
                        bill:"40"
                    }
                ]
            },
            {
                name:"Kitchen",
                icon:'https://image.flaticon.com/icons/svg/2321/2321390.svg',
                devices:[
                    {
                        name:"Television",
                        power:"25W",
                        bill:"10"
                    },
                    {
                        name:"Air Conditioner",
                        power:"50W",
                        bill:"40"
                    }
                ]
            },
            {
                name:"Add [ + ]",
                icon:'https://image.flaticon.com/icons/svg/2321/2321390.svg',
                devices:[
                    {
                        name:"Television",
                        power:"25W",
                        bill:"10"
                    },
                    {
                        name:"Air Conditioner",
                        power:"50W",
                        bill:"40"
                    }
                ]
            }
        ];
    }
 componentDidMount(){
    this.getLeaderboardData()


        
 }
    getLeaderboardData = async (index = 1)=>{
        let response = await fetch(
            "https://api.github.com/users/Pushpendrahpx/followers"
        )
        let data = await response.json();

        console.log(data);
        this.setState({
            LeaderboardData:data
        },()=>{
            console.log("Printed")
            this.render()
        });
        return data;
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className='homecontainer'>
                    {/* ================================== Rooms ================================== */}
                        
                    <b className='lead' style={{color:"white"}}>Rooms Available</b>
                    <div className='rooms cards horizontal-scroll-wrapper'>{/* Users Rooms Appliances with Rooms Services */}
                        {
                            this.Rooms.map(
                                room=>{
                                    return(
                                        <div className='room card-item ripple' style={{background:"url('https://image.flaticon.com/icons/svg/2321/2321390.svg') center fit "}}> {/*  for Every Room Actually Map Method will Iterate Here */}
                                                <div className='room-title lead'>{room.name}</div>
                                                <div className='room-devices'>{room.length}</div> 
                            
                                        </div>
                                    );
                                }
                            )
                        }
                    </div>
                    
                        

               
                    {/* 1. What Friends Have Saved
                        2. Leaderboard
                        3. Add Some Other Resources to Optimise
                        4. Below an Another Drawer kind to Add People, [ Like Floating Button ]  */}
                    <div></div>
                            
                    {/* ================================== Rooms ================================== */}
                        <div className='leaderboard'>
                            <span className='lead' style={{textAlign:"center",fontSize:"30px",padding:"30px",margin:"20px"}}>Leaderboard</span>
                            {
                                this.state.LeaderboardData.map(user=>{
                                    return(
                                    <div className='leaderboard-item ripple'>{user.login}</div>
                                    );
                                })
                            }
                        </div>
                    {/* 1. What Friends Have Saved
                        2. Leaderboard
                        3. Add Some Other Resources to Optimise
                        4. Below an Another Drawer kind to Add People, [ Like Floating Button ]  */}
                   
                </div>

                
            </div>
        );
    }
}

export default home


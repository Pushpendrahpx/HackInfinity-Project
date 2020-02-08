import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './home.css'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Host from '../../myIp';
class home extends Component {
    constructor(props) {
        console.log(Host.host)
        super(props)

     
        
       
        this.state = {
            LeaderboardData:[],
            bio:'',
            Rooms:[],
            User:{}
        }


        this.getLeaderboardData = this.getLeaderboardData.bind(this);
        console.log(this.state.User)
    }
 async componentDidMount(){
    this.getLeaderboardData()

    let rooms_response = await fetch("http://"+Host.host+":8000/popu/rooms/");
    let rooms_json = await rooms_response.json();
    this.setState({
        Rooms:rooms_json
    });

    let User_response = await fetch("http://"+Host.host+":8000/api/usview/");
    let User = await User_response.json();

    this.setState({
        User:User
    })
    console.log(this.state)
   localStorage.setItem("userdata",JSON.stringify(User));
 }
    getLeaderboardData = async (index = 1)=>{
        
        console.log(
            "Before Starting"
        )
        let response = await fetch(
            "http://"+Host.host+":8000/popu/rooms/",
            {type:"cors","Access-Control-Allow-Origin":"*"}
        )
        let data = await response.json();
            console.log("After Requset",data)
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
                        
                    <b className='lead'>Rooms Available</b>
                    <div className='rooms cards horizontal-scroll-wrapper'>{/* Users Rooms Appliances with Rooms Services */}
                        {
                            this.state.Rooms.map(
                                room=>{
                                    return(
                                       <Link key={room}  className='room card-item ripple' style={{textDecoration:"none"}} to={`/home/`+room}>
                                        <div key={room} className='' style={{background:"url('https://image.flaticon.com/icons/svg/2321/2321390.svg') center fit "}}> {/*  for Every Room Actually Map Method will Iterate Here */}
                                                <div  className='room-title lead'>{room}</div>
                            
                                        </div>
                                        </Link>
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
                            <span className='lead'  style={{textAlign:"center",fontSize:"30px",padding:"30px",margin:"20px"}}>Leaderboard</span>
                            {
                                this.state.LeaderboardData.map(user=>{
                                    return(
                                    <div className='leaderboard-item ripple' key={user}>{user}</div>
                                    );
                                })
                            }
                        </div>
                    {/* 1. What Friends Have Saved
                        2. Leaderboard
                        3. Add Some Other Resources to Optimise
                        4. Below an Another Drawer kind to Add People, [ Like Floating Button ]  */}
                   
                </div>
                
                <Footer />
                
                
            </div>
        );
    }
}

export default home


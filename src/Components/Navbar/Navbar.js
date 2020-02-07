import React, { Component } from 'react'
import './Navbar.css';


class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div id='Navbar' className=''>
                <div id='logo' className='elem ripple'>Logo</div>
                <div id='title' className='elem ripple'>Title</div>
                <div id='drawer' className='elem ripple'> Drawer</div>
            </div>
        )
    }
}

export default Navbar

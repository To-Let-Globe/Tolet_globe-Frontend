import React, { useState } from 'react';
import './Header.css';
import user from '../../assets/img/user.png'

const Header = () => {
    const [data,setData] = useState({
        userName:"John Doe",    
        role:"Property Seeker",
        tagline:"Passionate about finding the perfect rental space"
    })


    return (
        <header className="header">
            <div className="header-content">
                <div className="user-info">
                    <img src={user} alt="" className='user-icon' />
                    <div className='details'>
                        <h2>{data.userName}</h2>
                        <p style={{background:'#555',width:'fit-content',margin:'2% 0'}}>{data.role}</p>
                        <p>{data.tagline}</p>
                    </div>
                </div>
                <div className="nav-buttons">
                    <button className="btn">Logout</button>
                    <button className="btn edit-profile">Edit Profile</button>
                </div>
            </div>
        </header>
    );
};

export default Header;

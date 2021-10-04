import React from 'react';
import './Card.css';

const CardUser = (props) => {
    
    
    const {name,company,picture,balance} = props.user
    
    return (
        <div className="Card">
            <img src={picture} alt="" />
            <h2>  {name}</h2>
            <h5> {company}</h5>
            
            <div>
            <h5 style={{color:'#0000FF'}}> {balance}</h5>
            <button>Start Class Today</button>
            </div>
        </div>
    );
};

export default CardUser;
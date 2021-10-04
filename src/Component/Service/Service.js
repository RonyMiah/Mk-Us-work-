import React, { useEffect, useState } from 'react';
import CardUser from '../Card/Card';
import './Service.css'

const Service = () => {
    const [users , setUsers] =useState([]);
    useEffect( ()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data =>setUsers(data));

    } ,[])

    
    return (
       
          <div className="Card-Design">
          {
               users.map(user=> <CardUser 
                key={user.index} 
                user={user}>
                </CardUser>)
           }
          </div>
       
    );
};

export default Service;
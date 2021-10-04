import React, { useEffect, useState } from 'react';
import CardUser from '../Card/Card';
import './Markting';
import './Markting.css'

const Markting = () => {

    const [users, setUsers]= useState([]);
    useEffect( ()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=> setUsers(data));
    } ,[])

    return (

        <div className="marktingStyle" >
             {
                 users.slice(0,8).map(user =>{
                     return (
                         <CardUser key={user.index} user={user}></CardUser>
                     )
                 })
             }
        </div>
    );
};

export default Markting;
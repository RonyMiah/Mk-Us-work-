import { useSSRSafeId } from '@react-aria/ssr';
import React, { useEffect, useState } from 'react';
import CardUser from '../Card/Card';
import './Home.css'


const Home = () => {
    const [users , setUser] = useState([]);
    useEffect( ()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data => setUser(data));
    }  ,[])

    

    

    return (
        
         <div className="cardUser">
         {
          users.slice(0, 4).map(user => {
              return(
                <CardUser key={user.index} user={user}></CardUser>
               )
              })
          }
         </div>
        
    );
};

export default Home;
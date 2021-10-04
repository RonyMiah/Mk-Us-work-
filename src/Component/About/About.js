import React, { useEffect, useState } from 'react';
import './About.css'

const About = () => {

    const [users , setUsers] =useState([]);
    useEffect( ()=>{
        fetch('./fakeTeam.json')
        .then(res=>res.json())
        .then(data=>setUsers(data));

    },[])

    return (
        <div className="aboutUs">
            <h1>About Us </h1>
            <br />
            <br />
                 <p>
                     Interpret data to inform business decisions, explore the economic foundations of strategy, and discover what’s behind the numbers in financial statements.
                     Develop the leadership and management skills to get things done and bring out the best in your team, whether you’re an aspiring, new, or seasoned leader.
                     Learn what it takes to harness innovation and transform a disruptive idea into a viable venture.
                 </p>
            <br />
            <br />
            <br />
                   <h2>Our Team Member :</h2>

            <div className="card">
                {
                  users.slice(0,6).map(user=> { 
                        const {picture,name,company} =user;
                        return(  
                            <div className="card-style"  key={user.name}>   
                                <img src={picture} alt="" />
                                    <h1>{name}</h1>
                                    <h3>{company}</h3>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    );
};

export default About;
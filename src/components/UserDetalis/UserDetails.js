import React from 'react';
import {Link, Outlet} from "react-router-dom";

const UserDetails = ({user}) => {

    const {id,name, username, email, phone, website} = user;
    return (
        <div>

        <div>Id:{id}</div>
        <div> Name:{name}</div>
        <div> Username:{username}</div>
        <div> Email:{email}</div>
        <div> Phone:{phone}</div>
        <div> Website:{website}</div>

            <Link to={'posts'}>
                <button key={user.id}> User posts with id {id} </button>
            </Link>

            <hr/>
            <div><Outlet/></div>

        </div>
    );
};

export {UserDetails};
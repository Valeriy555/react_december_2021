import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {UserDetails} from "../../components";
import {userService} from "../../services";
import css from "./SingleUserPage.module.css";

const SingleUserPage = () => {
    const {state} = useLocation();
    const [user,setUser] = useState(state);
    const {id} = useParams();

    useEffect(()=>{
        if(!state){
            userService.getByIdUser(id).then(({data}) => setUser(data))

        }else {
            setUser(state)
        }
    },[id, state])



    return (
         <div className={css.wrapUser}>
            <div>{user && <UserDetails user = {user}/>}</div>
        </div>
    );
};

export {SingleUserPage};
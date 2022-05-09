import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../store";


const Users = () => {

    const {users} = useSelector(store => store.user);
    const dispatch = useDispatch();

    const submit = (e) => {
       e.preventDefault()
       const name = e.target.userName.value;
       const newUser = {id:new Date().getTime(), name}
        dispatch(addUser({newUser}))

    };

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" name={'userName'} placeholder={'enter name'}/>
                <button>Save</button>
            </form>
            {users.map(user => <div key={user.id}> {user.id}){user.name} </div> )}
            <hr/>
        </div>
    );
};

export {Users};
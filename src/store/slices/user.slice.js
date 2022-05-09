import {createSlice} from "@reduxjs/toolkit";

let initialState ={
    users:[
        {id:1, name:'Valera'},
        {id:2, name:'Diana'},
        {id:3, name:'Olga'}
    ]
};
const userSlice = createSlice({
    name:'userSlice',
    initialState,

    reducers:{
        addUser:(state,action) =>{
            const userNew = action.payload.newUser;
            state.users.push(userNew)
        }
    }
});

const userReducer = userSlice.reducer;
export {userReducer};

export const {addUser} = userSlice.actions;


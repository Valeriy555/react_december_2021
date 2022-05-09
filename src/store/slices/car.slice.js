import {createSlice} from "@reduxjs/toolkit";

let initialState ={
    cars:[
        {id:1, model:'BMW'},
        {id:2, model:'Audi'},
        {id:3, model:'Mazda'}
    ]
};

const carSlice = createSlice({
    name:'carSlice',
    initialState
});

const carReducer = carSlice.reducer;

export {carReducer};

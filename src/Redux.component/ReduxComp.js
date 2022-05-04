import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const ReduxComp = () => {
    let state = useSelector((state) => state);
    let dispatch = useDispatch();
    return (
        <div>

            <div>{state}</div>
            <button onClick={() => dispatch ({type: 'change', payload:'poka Valera => через redux'})}>Изменить</button>
            <button onClick={() => dispatch ({type: 'back', payload:'privet Valera => через redux!!'})}>Вернуть назад</button>
        </div>
    );
};

export default ReduxComp;
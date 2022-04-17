import React from 'react';
import {Link} from "react-router-dom";

const Button = ({to, state, children, ...arg}) => {
    return (
        <div>
            <Link to={to} state={state}>
                <button {...arg}>{children}</button>
            </Link>
        </div>
    );
};

export {Button};
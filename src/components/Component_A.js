import React from 'react';
import Component_B from "./Component_B";

const Component_A = ({props_1}) => {
    return (
        <div>

            A component
            <Component_B props_2={props_1}/>
        </div>
    );
};

export default Component_A;
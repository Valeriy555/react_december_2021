import React from 'react';
import Component_C from "./Component_C";

const Component_B = ({props_2}) => {
    return (
        <div>

            B component
            <Component_C props_3={props_2}/>
        </div>
    );
};

export default Component_B;
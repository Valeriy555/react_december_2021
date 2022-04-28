import React from 'react';
import {MyContext} from "../App";

const Component_C = ({props_3}) => {
    return (
        <div>
            C component
            <h4>"Переданная инфа из App методом props drill !!" ==> {props_3} </h4>

            <MyContext.Consumer>
                {
                    (value) => { return <h4> "Переданная инфа из App через Context !!"  {value} </h4> }

                }
            </MyContext.Consumer>

        </div>
    );
};

export default Component_C;
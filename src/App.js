import React, {useReducer} from 'react';
import reducer from "./Redusers/count.reducer";

const init = (initCount) => {
    return {count1: initCount, count2: initCount} // это попадает в state
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, 0, init);

    return (
        <div>
            <div>

                {state.count1} <br/>
                <button onClick={() => dispatch({type: 'inc'})}>inc</button>
                <button onClick={() => dispatch({type: 'dec'})}>dec</button>
                <button onClick={() => dispatch({type: 'reset'})}>reset</button>
                <button onClick={() => dispatch({type: 'install', payload: 10})}>install_10</button>
                <hr/>
                {state.count2} <br/>
                <button onClick={() => dispatch({type: 'inc2'})}>inc</button>
                <button onClick={() => dispatch({type: 'dec2'})}>dec</button>
                <button onClick={() => dispatch({type: 'reset2'})}>reset</button>
                <button onClick={() => dispatch({type: 'install2', payload: 5})}>install_10</button>
                <hr/>

            </div>
        </div>
    );
};

export default App;
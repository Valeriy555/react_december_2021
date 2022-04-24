import React, {useReducer} from 'react';

const init = (initCount) => {
    return {count1: initCount,count2: initCount} // это попадает в state


}

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {state,count1: state.count1 +1 }
        case 'dec':
            return {state,count1: state.count1 -1 }
        case 'reset':
            return {state,count1: 0 }
        case 'install':
            return {state,count1: action.payload }
    }

}

const App = () => {
    const [state, dispatch] = useReducer(reducer,0,init);
    return (
        <div>
           <div>

               {state.count1} <br/>
               <button onClick={()=>dispatch({type:'inc'})}>inc</button>
               <button onClick={()=>dispatch({type:'dec'})}>dec</button>
               <button onClick={()=>dispatch({type:'reset'})}>reset</button>
               <button onClick={()=>dispatch({type:'install', payload: 10})}>install_10</button>

           </div>
        </div>
    );
};


export default App;
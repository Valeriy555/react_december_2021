import React, {useReducer} from 'react';

const init = (initCount) => {
    return {count1:initCount,count2:initCount}


}
console.log(init);
const reducer = () => {

}


const App = () => {
    const [state, dispatch] = useReducer(reducer,0,init);
    return (
        <div>
            app
        </div>
    );
};


export default App;
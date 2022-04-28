import React, {createContext} from "react";
import Component_A from "./components/Component_A";


export let MyContext = createContext('defulat');

function App() {
    let drill = 'Privet Valera!'
    return (
        <div>
            App component

            <MyContext.Provider value={'Poka Valera!!'}>

                <Component_A props_1={drill}/>

            </MyContext.Provider>


        </div>
    );
}

export default App;

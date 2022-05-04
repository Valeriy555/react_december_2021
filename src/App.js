import {Provider} from "react-redux";
import {createStore} from "redux";

import ReduxComp from "./Redux.component/ReduxComp";

function App() {


    function reducer(state = 'privet Valera!!', action) {
        switch (action.type) {
            case 'change':
                return action.payload;

            case 'back':
                return action.payload;

            default:
                return state
        }

    }

    let store = createStore(reducer);
    return (
        <div>
            <Provider store={store}>

                <ReduxComp />

            </Provider>
        </div>
    );
}

export default App;

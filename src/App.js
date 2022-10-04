import {useRef} from "react";
import {ADD, DELETE, useCatReducer} from "./reducers";


function App() {

    const catRef = useRef();
    const [state, dispatch] = useCatReducer();

    const addCat = () => {
        const newCat = catRef.current.value;
        dispatch({type: ADD, payload: { newCat }})
        console.log(newCat);
    }

    return (
        <div>
            <div>
                <input type="text" ref={catRef} placeholder={'enter cat name'}/>
                <button onClick={addCat}>Add</button>
            </div>
            <hr/>
            <div>
                {state.map(newCat => <div key={newCat.id}>{newCat.name}
                    <button onClick={() => dispatch({type: DELETE, payload: {id: newCat.id}})}>Delete</button>
                </div>)}
            </div>

        </div>
    );
}

export default App;

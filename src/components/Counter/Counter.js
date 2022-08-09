import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, addSelfDefined, reset} from "./countSlice";

const Counter = () => {

    const [input, setInput] = useState('');

    const dispatch = useDispatch();
    const number_redux = useSelector(state => state.counter.count)


    return (
        <div>
            <section>
                <h1>{number_redux}</h1>
                <div>
                    <button onClick={()=>{dispatch(increment())}}> + </button>
                    <button onClick={()=>{dispatch(decrement())}}> - </button>
                </div>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <div>
                    <button onClick={() => {
                        if(isNaN(Number(input))) {
                            alert("Illegal Input");
                            setInput('');
                        }else dispatch(addSelfDefined(Number(input)));
                    }
                    }> Add Amount </button>
                    <button onClick={() => {dispatch(reset()); setInput('');}}> reset </button>
                </div>

            </section>
        </div>
    );
}

export default Counter;
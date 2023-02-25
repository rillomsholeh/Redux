import { useDispatch, useSelector } from "react-redux";
import { DecrementWitchCheckingAction, increment } from "../app/features/counter/Action";

const Counter = () => {
    let {count} = useSelector (state => state.counter)
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(DecrementWitchCheckingAction(1))}>-</button>
            {''}  <span>{count}</span>  {''}
            <button onClick={() => dispatch(increment(1))}>+</button>
        </div>
    )
}

export default Counter;
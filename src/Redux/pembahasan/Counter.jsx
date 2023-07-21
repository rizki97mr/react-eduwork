import { useDispatch, useSelector } from "react-redux";
import { decrementWithCheckingAction, increment } from "../../app/feature/Counter/actions";


const Counter = () => {
    let state = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(decrementWithCheckingAction(1))}>-</button>
            {' '}<span>{state.count}</span>{' '}
            <button onClick={() => dispatch(increment(1))}>+</button>
            {' '}<span>{state.total}</span>{' '}
        </div>
    )
}

export default Counter;
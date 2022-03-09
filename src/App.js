import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions';

function App() {
  const myState = useSelector((state) => state.incDecReducer);
  const dispatch = useDispatch();
  return (
    <>
      <div className='container'>
        <h1>Increment /Decrement Counter</h1>
        <h4>React & Redux</h4>

        <button className='decrement' onClick={() => dispatch(decNumber())}>
          -
        </button>
        <input type='text' name='score' id='' value={myState} />
        <button className='increment' onClick={() => dispatch(incNumber(5))}>
          +
        </button>
      </div>
    </>
  );
}

export default App;

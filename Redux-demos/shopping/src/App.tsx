import { useDispatch } from 'react-redux'
import './App.css'
import { UseDispatch,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators ,State} from './state';
function App() {
const dispatch = useDispatch();
const {AddProductAction,RemoveProductAction} =bindActionCreators(actionCreators,dispatch);
const amount =useSelector((state:State)=>state.shop)
  return (
    <>
      <div className='App'>
        <h1>{amount}</h1>
        <button onClick={()=>AddProductAction(1)}>Add Product</button>
        <button onClick={()=>RemoveProductAction(1)}>Remove Product</button>
      </div>
      </>
  )
}

export default App

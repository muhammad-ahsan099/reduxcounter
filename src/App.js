
import './App.css';
import {useDispatch ,useSelector} from 'react-redux'
import CounterMain from './components/Counter/Counter';

function App() {

  const store = useSelector(store => store)
  console.log("Complete Store in APP js: " , store);


  return (
    <div >
      < CounterMain />

    </div>
  );
}

export default App;

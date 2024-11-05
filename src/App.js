import './App.css';
import { createBrowserHistory } from 'history';
import { Main } from './routing/Routs';
import { store } from './store/store';


export let history = createBrowserHistory();
store.subscribe(() => console.log(store.getState()));

function App() {
  return (
    <Main/>
  );
}

export default App;
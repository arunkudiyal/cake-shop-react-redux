import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Cake from './components/CakeComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cake />
      </div>
    </Provider>
  );
}

export default App;

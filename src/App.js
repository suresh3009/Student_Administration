import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Data from './components/Data';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Home from './components/Home';
import Soprts from './Soprts';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/data/:email' element={<Data />} />
          <Route path='/' element={<Home />} />
          <Route path='/sports' element={<Soprts />} />
        </Routes>
        <div className="App">
        </div>
      </Provider>
    </>
  );
}

export default App;

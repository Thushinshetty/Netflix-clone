import Body from './components/Body';
import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import Browse from './components/Browse';
import Login from './components/Login';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  return (
    <>
    <Provider store={appStore}>
    <Routes>
    <Route path="/" element={<Body />}></Route>
    <Route path="/browse" element={<Browse/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
   
  </Routes>
  </Provider>
    </>
  );
}

export default App;

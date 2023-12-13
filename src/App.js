import Body from './components/Body';
import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Body />}></Route>
    <Route path="/header" element={<Header/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
   
  </Routes>
   
    </>
  );
}

export default App;

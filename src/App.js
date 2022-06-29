import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './Header';
import Main from './Main';
import CreateNamePlate from './CreateNamePlate';
import Data from './data';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<><Header/><Main Data = {Data}/></>}/>
        <Route path='/createnameplate' element={<CreateNamePlate/>}/>
        <Route path='/usersPlate' element={<Header/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

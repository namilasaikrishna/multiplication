import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Number from './components/Number';
import Table from './components/Table';
import Square from './components/Square';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Number/>}/>
      <Route path="/Table" element={<Table/>}/>
      <Route path="/Square" element={<Square/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

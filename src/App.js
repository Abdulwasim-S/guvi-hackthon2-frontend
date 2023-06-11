import { Route, Routes } from 'react-router';
import './App.css';
import LogInPage from './RouterPages/LogInPage';
import BasePage from './RouterPages/BasePage';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddNewProduct from './RouterPages/AddNewProduct';


function App() {
  return (
    <div className="App">
      <Routes exact path='/'>
        <Route path='/' element={<BasePage/>}/>
        <Route path='login'element={<LogInPage/>}/>
        <Route path='addnewproduct'element={<AddNewProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;

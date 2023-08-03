import logo from './logo.svg';
import './App.css';
import AddPizza from './Pizza/AddPizza';
import ManagePizza from './Pizza/ManagePizza';
import UpdatePizza from './Pizza/UpdatePizza';
import UserPizza from './Pizza/UserPizza';
import Navbar from './Pizza/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
   
    <Router>
    <div>
    <Navbar />
      <Routes>
      <Route exact path='/'>
            <Route index element={<ManagePizza/>}/>
            <Route exact path="pizza/:id" element={<UpdatePizza/>}/>
            <Route exact path="pizza/new" element={<AddPizza/>}/>
            <Route exact path="pizza" element={<UserPizza/>}/>
       </Route>

      </Routes>
      </div>
    </Router>
    


   
   </>
  );
}

export default App;

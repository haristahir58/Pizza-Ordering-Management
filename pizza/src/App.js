import logo from './logo.svg';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import AddPizza from './Pizza/AddPizza';
import ManagePizza from './Pizza/ManagePizza';
import UpdatePizza from './Pizza/UpdatePizza';
import UserPizza from './Pizza/UserPizza';
import Navbar from './Pizza/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParentComponent from './ParentComponent';
import ChildComponent from './ChildComponent';
import GrandchildComponent from './GrandchildComponent';
import ParentC from './ParentC';
import ChildC from './ChildC';
import SuperChildC from './SuperChildC';
import OtherChildC from './OtherChildC';
import Reducer from './Reducer';
import Cart from './Pizza/Cart';

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

      <Route exact path = {'/parent'} element= {<ParentComponent/>}/>
      <Route exact path = {'/parentContext'} element= {<ParentC/>}/>
      <Route exact path = {'/childContext'} element= {<ChildC/>}/>
      <Route exact path = {'/superContext'} element= {<SuperChildC/>}/>
      <Route exact path = {'/otherContext'} element= {<OtherChildC/>}/>
      <Route exact path = {'/child'} element= {<ChildComponent/>}/>
      <Route exact path = {'/grandChild'} element= {<GrandchildComponent/>}/>
      <Route exact path = {'/reducer'} element= {<Reducer/>}/>
      <Route exact path = {'/cart'} element= {<Cart/>}/>
      </Routes>
      </div>
    </Router>
    


   
   </>
  );
}

export default App;

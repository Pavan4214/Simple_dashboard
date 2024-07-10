import Nav from './components/Nav';
import './App.css';
import Footer from './components/Footer';
import SignUp from './components/signup';
import { BrowserRouter , Routes ,Route} from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route element={<PrivateComponent/>} >
       <Route path='/add' element={<h1>Add product component</h1>}/>
       <Route path='/logout' element={<h1>logout</h1>}/>
       <Route path='/update' element={<h1>update product component</h1>}/>
       <Route path='/profile' element={<h1>profile</h1>}/>
       <Route path='/profile' element={<h1>profile</h1>}/>
       </Route>
       <Route path='/signup' element={<SignUp />}/>

      </Routes>
      
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

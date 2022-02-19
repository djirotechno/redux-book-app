import Footer from "./components/Footer";
import { NavBar } from "./components/NavBar";
import Addbooks from "./containers/Addbooks";
import Searchbook from "./containers/Searchbook"
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  return (
<Router>
  <NavBar/>
    <Routes>
      <Route exact path="/" element={ <Addbooks/>}/>
      <Route path="search"  element={<Searchbook/>}/>
    </Routes>
  <Footer/>
</Router>
     
     
    
  );
}

export default App;

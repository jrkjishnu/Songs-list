import './App.css';
import Songs from './Components/Songs';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import About from './Components/About';
import AddSongs from './Components/AddSongs';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return(
    <Router>
        <Link style={{padding:'5px'}} to="/">About</Link>
        <Link style={{marginLeft:'5px'}} to="/songs">Songs</Link>
        <Route path="/" exact component={About}></Route>
        <Route path="/songs" component={Songs}></Route>
        <Route path="/addSongs" component={AddSongs}></Route>
    </Router>
  );
}

export default App;

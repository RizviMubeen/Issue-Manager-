
import './App.css';
import './Dashboard.css'
import './Modal.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddIssue from './issues/AddIssue';
import Editissue from './issues/Editissue';
import ViewIssue from "./issues/ViewIssue";
import Dashboard from './pages/Dashboard';




function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/addissue" element={<AddIssue/>}/>
        <Route exact path="/Editissue/:id" element={<Editissue/>}/>
        <Route exact path="/viewissue/:id" element={<ViewIssue />} />
        <Route exact path="/dashboard" element={<Dashboard/>}/>

      </Routes>
        </Router>

    </div>
  );
}

export default App;

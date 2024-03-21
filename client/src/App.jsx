import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar.jsx";
import AppRoutes from "./components/AppRoutes";

function App() {
  return(
      <Router>
          <h1>hola me encuentras en app/client/app</h1>
          <div><NavBar/></div>
          <div>< AppRoutes/></div>
      </Router>
  )
}

export default App

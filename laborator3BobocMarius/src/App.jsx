import { Router, Routes, Route } from "@components/navigation";
import SuperOferte from './pages/SuperOferte';
import { Navbar } from "@components/Navbar"
import  Magazine from './pages/Magazine';
import Zone from "./pages/Zone"
import {Footer} from "@components/Footer"

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/">
            <SuperOferte/>
        </Route>
        <Route path="/magazine">
          <Magazine/>
        </Route>
        <Route path="/zone">
          <Zone/>
        </Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;

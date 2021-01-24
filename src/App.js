import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import Packages from './Components/pages/Packages';
import SignUp from './Components/pages/SignUp';
import Footer from './Components/Footer';
function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/packages' exact component={Packages} />
          <Route path='/sign-up' exact component={SignUp} />

        </Switch>
        <Footer />
      </Router>

    </>
  )
}

export default App

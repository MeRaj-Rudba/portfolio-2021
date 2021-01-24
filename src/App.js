import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Projects from './Components/pages/Projects';
import SignUp from './Components/pages/SignUp';
import Footer from './Components/Footer';
import Blogs from './Components/pages/Blogs';
import AboutMe from './Components/pages/AboutMe';
function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/blogs' exact component={Blogs} />
          <Route path='/aboutMe' exact component={AboutMe} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/sign-up' exact component={SignUp} />

        </Switch>
        <Footer />
      </Router>

    </>
  )
}

export default App

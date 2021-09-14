import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from './static/Theme';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Proyects from './components/Proyects';
import Contact from './components/Contact';
import Knowledge from './components/Knowledge';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/sobremi">
            <AboutMe />
          </Route>
          <Route path="/conocimientos">
            <Knowledge />
          </Route>
          <Route path="/proyectos">
            <Proyects />
          </Route>
          <Route path="/experiencia">
            <Experience />
          </Route>
          <Route path="/contacto">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

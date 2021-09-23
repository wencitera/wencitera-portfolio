import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline, LinearProgress, ThemeProvider, StyledEngineProvider } from '@mui/material';
import { theme } from './static/Theme';
import NavBar from './components/NavBar';
//import Home from './components/Home';
//import AboutMe from './components/AboutMe';
//import Experience from './components/Experience';
//import Contact from './components/Contact';
//import Knowledge from './components/Knowledge';
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('./components/Home'))
const AboutMe = lazy(() => import('./components/AboutMe'))
const Experience = lazy(() => import ('./components/Experience'))
const Knowledge = lazy(() => import('./components/Knowledge'))
const Contact = lazy(() => import('./components/Contact'))


function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Suspense fallback={<LinearProgress color="secondary"/>}>
          <CssBaseline />
          <Router>
            <Switch>
              <Route path="/sobremi">
                <AboutMe />
              </Route>
              <Route path="/conocimientos">
                <Knowledge />
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
        </Suspense>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

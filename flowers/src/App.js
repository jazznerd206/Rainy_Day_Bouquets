import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.js';
import AboutPage from './components/AboutPage/AboutPage.js';
import ContactPage from './components/ContactPage/ContactPage.js';
import GalleryPage from './components/GalleryPage/GalleryPage.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/about" component={AboutPage} />
        <Route  path="/gallery" component={GalleryPage} />
        <Route  path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;

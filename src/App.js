import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { FeedbackProvider } from './context/FeedbackContext';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';


function App() {

  return (
    <FeedbackProvider>
        <Router>
            <Header/>
            <Switch>
                <Route path="/about" component={AboutPage} />
                <Route path="/">
                    <div className="container">
                        <FeedbackForm/>
                        <FeedbackStats />
                        <FeedbackList/>
                        <AboutIconLink/>
                    </div>
                </Route>
            </Switch>
        </Router>
    </FeedbackProvider>
  );
}

export default App;

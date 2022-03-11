import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

function App() {

    const [feedback, setFeedback] = useState(FeedbackData) 

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) { 
            setFeedback(feedback.filter((item) => item.id !== id))
            }   
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback((feedback) => [newFeedback, ...feedback])
    }



  return (
    <Router>
        <Header/>
        <Switch>
            <Route path="/about" component={AboutPage} />
            <Route path="/">
                <div className="container">
                    <FeedbackForm handleAdd={addFeedback}/>
                    <FeedbackStats feedback={feedback} />
                    <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                    <AboutIconLink/>
                </div>
            </Route>
        </Switch>

    </Router>
  );
}

export default App;

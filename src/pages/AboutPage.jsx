import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About This Page</h1>
            <p>This is a React app for leaving feedback. <br/><br/>It's build by following the instructions from the <a href="https://www.udemy.com/course/react-front-to-back-2022/" target="_blank" rel="noreferrer">"React Front to Back 2022"</a> course on Udemy.</p>
            <p><Link to="/">Back To Home</Link></p>    
        </div>
    </Card>
  )
}

export default AboutPage  
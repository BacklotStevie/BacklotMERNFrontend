//main react app where we put all our components and pages that will display on our application
import { Route } from 'react-router-dom';
import './App.css'
import Header from '../src/components/Header/header';
import LandingPage from './pages/LandingPage/LandingPage';
import ReviewPage from './pages/ReviewPage/ReviewPage';
import IndividualReview from './components/IndividualReview/individualreview';
import AddReview from './pages/AddReview/AddReviewPage';
import PodcastPage from './pages/PodcastPage/PodcastPage';
import VideosPage from './pages/VideosPage/VideosPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import BacklotTeam from './pages/TeamPage/TeamPage';
import Signup from './pages/Signup/adduser';
import LoginPage from './pages/LoginPage/LoginPage';
import AdminPage from './pages/AdminPage/AdminPage';
import Footer from '../src/components/Footer/footer';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Route exact path="/home" render={(props) => <LandingPage {...props} />} />
      <Route exact path="/reviews/:id" render={(props) => <IndividualReview {...props} />} />
      <Route exact path="/addReview" render={(props) => <AddReview  {...props} />} />
      <Route exact path="/reviews" render={(props) => <ReviewPage {...props} />} />
      <Route exact path="/podcastpage" render={(props) => <PodcastPage {...props} />} />
      <Route exact path="/videospage" render={(props) => <VideosPage {...props} />} />
      <Route exact path="/aboutus" render={(props) => <AboutUsPage {...props} />} />
      <Route exact path="/teampage" render={(props) => <BacklotTeam {...props} />} />
      <Route exact path="/signup" render={(props) => <Signup {...props} />} />
      <Route exact path="/login" render={(props) => <LoginPage {...props} />} />
      <Route exact path="/adminpage" render={(props) => <AdminPage {...props} />} />
      <Footer />
    </div>
  );
}

export default App;

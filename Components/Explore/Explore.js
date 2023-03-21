import './Explore.css';
import Footer from './components/Footer/Footer';

function Explore() {

  return (
    <div className="container">
      {<Footer/>} {/* display the redirection menu only if weather data displayed */}
    </div>

  );
}
export default Explore;
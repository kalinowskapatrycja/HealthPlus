import './Explore.css';
import Nav from './components/Navigation/nav';

function Explore() {

  return (
    <div className="container">
      {<Nav/>} {/* display the redirection menu only if weather data displayed */}
    </div>

  );
}
export default Explore;
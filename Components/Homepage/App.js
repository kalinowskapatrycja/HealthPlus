import './App.css';
import Footer from './components/footer/footer';

function App() {

  return (
    <div className="container">
      {currentWeather && <Footer/>} {/* display the redirection menu only if weather data displayed */}
    </div>

  );
}
export default App;

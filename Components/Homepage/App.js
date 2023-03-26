import './App.css';
import Footer from './components/footer/footer';

function App() {

  return (
    <div className="container">
      <header>
        <div>FDM Logo Placeholder</div>
      </header>
      <div>
          <h3>Welcome to Health+!</h3>
          <p>Health+ is a Wellbeing WebApp, specifically targeted towards FDM consultants and internal staff. <br>
          Health+ will provide fitness, mental health and general wellbeing support through features like: trackers, various resources on these topics, <br>
          forums and a chat(??) platform, where FDM Employees will be able to contact one of the 30 Mental Health Ambassadors.</p>
      </div>
      <form>
          <fieldset>
              <legend>Sign in to Health+</legend>
              <section>
              <p>
                  <label>Username</label><br/>
                  <input type="username" name="username" placeholder="Username" required/>
              </p>
              <p>
                  <label>Password</label><br/>
                  <input type="password" name="password" placeholder="Password" minlength="8" required
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}" title="Must contain at least 8 characters,
                  one uppercase and lower case letter and at least one number."/>
                  <nav><p>Forgot password?</p></nav>
              </p>
              <input type="submit" value="Login"/>
            </section>
          </fieldset>
      </form>
        {currentWeather && <Footer/>} {/* display the redirection menu only if weather data displayed */}
      </div>

  );
}
export default App;

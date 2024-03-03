//import logo from './logo.svg';
import './App.css';
import logo from '/Users/calvinlloyd/Documents/excel D3/zen_2.0/src/logo.jpeg'
import logo2 from '/Users/calvinlloyd/Documents/excel D3/zen_2.0/src/logo2.jpeg'

function App() {
  return (
    <div>
      <div className="App">
          <div className="energy">
          <span style={{ '--clr': '#DBA35Bff', '--i': '18px', '--d': '2.5s' }}></span>
          <span style={{ '--clr': '#DBA35Bff', '--i': '13px', '--d': '5s' }}></span>
          {/* <span style={{ '--clr': '#EC0868', '--i': '15px', '--d': '7.5s' }}></span>
          <span style={{ '--clr': '#EC0868', '--i': '20px', '--d': '10s' }}></span> */}
          </div>
      </div>
      <div className="cont">
      <div><img src={logo2} alt="Logo" height="110px" className ="logo2"/>
      <img src={logo} alt="Logo" height="250px" className ="logo"/></div>
      <div className="sub_cont">
        <div className = "sub_sub">
          <a>HOME</a>
          <a>QUIZ</a>
        </div>
      </div>
      

      </div>
      <div className="title"><h1 className="flow">Flow</h1><h1 className="into">into</h1><h1 className="bliss">bliss</h1></div>
      <div className = "butt">
        <button>Take Test</button>
      </div>
      <div className = "box">
          <p> </p>
      </div>
    </div>
  );
}

export default App;

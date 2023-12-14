import logo from './logo.svg';
import './App.css';
// import Button from './components/Button';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import TypingAnimation from './components/OtherComponent/TypingAnimation';
// import TypingAnimation1 from './components/bootsrtap-comp/TypingAnimation-1';

// import TypingAnimation1 from './components/bootsrtap-comp/TypingAnimation-1';

import LandingPage from './components/landing-page/LandingPage';

function App() {
  return (
    <div className="App">
      {/* how are you */}
      {/* <TypingAnimation1 text="Data. Emmersion. Action." /> */}
      {/* <Button/> */}
      
      <div className="type-anim container mt-5">
      {/* <TypingAnimation1 text="Data. Emmersion. Action." /> */}
      <LandingPage/>
      </div>

    </div>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import LandingPage from './components/landing-page/LandingPage';
// import OtherComponent from './components/OtherComponent'; // Other components in your app

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={LandingPage} />
//         <Route path="/other" component={OtherComponent} />
//         {/* other routes as needed */}
//       </Switch>
//     </Router>
//   );
// }

// export default App;

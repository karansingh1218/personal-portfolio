import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from "./Components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import StickyBox from "react-sticky-box";


// const Routing = () => {
//   return (
//     <Router>
//       <Header />
//       <Switch>
//       <Route exact path="/" component={App} />
//       <Route path="/about" component={About} />
//       </Switch>
//     </Router>
//   )
// }

ReactDOM.render(
  <React.StrictMode>
    <div className = "nav">
    <StickyBox>
    <Header />
    </StickyBox>
    </div>
    <About />
    <Experience />

    <Education />
    
    <Projects />


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

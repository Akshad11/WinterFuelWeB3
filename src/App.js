import React, { Component } from 'react';
import Home from "./componet/page1/Home"
import './App.css';
import About from "./componet/page2/About.js"
import MyQuest from "./componet/page3/MyQuest"
import Quest from "./componet/page3/Quest"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div>

        <Router>


          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/MyQuest' element={<MyQuest />} />
            <Route path='/Quest' element={<Quest />} />
          </Routes>
        </Router>
      </div>




    );
  }
}

export default App;

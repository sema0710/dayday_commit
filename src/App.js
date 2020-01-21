import React, { useState } from 'react';
import Main from './component/main'
import TodayCommit from './component/todayCommit'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  // const [userData,dataChange] = useState({});
  return (
    <>
    <link href="https://fonts.googleapis.com/css?family=Calistoga&display=swap" rel="stylesheet"/>
    <Router>
      <Route exact path="/" render={()=><Main/>}></Route>
      <Route path="/Today/:userId" render={()=><TodayCommit/>}></Route>
    </Router>
    </>
  );
}

export default App;

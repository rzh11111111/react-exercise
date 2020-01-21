import React from 'react';
import './App.css';
// import Home from './pages/Home';
import Button from './pages/Button/Button';
// import User from './pages/User';
import Search from './pages/Search';


const store = {
  userInfo:{
    userName:'xiaoming'
  }
}
function App() {
  return (
    <div className="App">
     {/* <Home></Home> */}
     {/* <User></User> */}
     <Search store={store}></Search>
     <Button></Button>
    </div>
  );
}

export default App;

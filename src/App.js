import React from 'react';
import './App.css';
// import Home from './pages/Home';
import Button from './pages/Button/Button';
// import User from './pages/User';
// import Search from './pages/Search';
import LifeCycle from './pages/LifeCycle';


// const store = {
//   userInfo:{
//     userName:'xiaoming'
//   }
// }
// function tellme(msg){
//   console.log('tellme',msg)
// }

function App() {
  return (
    <div className="App">
     {/* <Home></Home> */}
     {/* <User></User> */}
     {/* <Search store={store} tellme={tellme}></Search> */}
     <LifeCycle></LifeCycle>
     <Button></Button>
    </div>
  );
}

export default App;

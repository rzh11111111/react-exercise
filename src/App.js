import React from 'react';
import './App.css';
// import Home2 from './pages/Home2';
import Button from './pages/Button/Button';
import Home from './pages/Home';
// import User from './pages/User';
// import Search from './pages/Search';
// import LifeCycle from './pages/LifeCycle';

const Context = React.createContext()
const Provider = Context.Provider
const Consumer = Context.Consumer

//1 const store = {
//   userInfo:{
//     userName:'xiaoming'
//   }
// }
//1 function tellme(msg){
//   console.log('tellme',msg)
// }

  const store = {
    home:{},
    user:{
      name:'xiaoming'
    }
  }

function App() {
  return (
    <div className="App">
     {/* <Home2></Home2> */}
     {/* <User></User> */}
     {/*1 <Search store={store} tellme={tellme}></Search> */}
     {/* <LifeCycle></LifeCycle> */}
     <Provider value={store}>
       <Consumer>
         {
           ctx=><Home {...ctx}></Home>
         }
       </Consumer>
     </Provider>
     {/* <Home></Home> */}
     <Button></Button>
    </div>
  );
}

export default App;

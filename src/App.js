import React from 'react';
import './App.css';
// import Home2 from './pages/Home2';
import Button from './pages/Button/Button';
import Home from './pages/Home';
// import User2 from './pages/User2';
// import Search from './pages/Search';
// import LifeCycle from './pages/LifeCycle';

//引入context
import {Provider,
  // Consumer,
} from './AppContext'
import User from './pages/User';
import HooksPage from './pages/HooksPage';
import HooksReducer from './pages/HooksReducer';

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
  const store2 = {
    home:{},
    user:{
      name:'Tom'
    }
  }

function App() {
  return (
    <div className="App">
      <HooksReducer/>
      {/* <HooksPage/> */}
      <User></User>
     {/* <Home2></Home2> */}
     {/* <User2></User2> */}
     {/*1 <Search store={store} tellme={tellme}></Search> */}
     {/* <LifeCycle></LifeCycle> */}
     <Provider value={{store,store2}}>
     <Home/>
     
       {/* <Consumer>
         {
           
          ctx=><User {...ctx}></User>
         }
       </Consumer> */}
     </Provider>
     <Button></Button>
    </div>
  );
}

export default App;

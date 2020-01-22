import React from 'react';
import './App.css';
// import Home2 from './pages/Home2';
import Button from './pages/Button/Button';
import Home from './pages/Home';
// import User2 from './pages/User2';
// import Search from './pages/Search';
// import LifeCycle from './pages/LifeCycle';

//引入context
import {Provider,Consumer} from './AppContext'
// import User from './pages/User';

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
     {/* <User2></User2> */}
     {/*1 <Search store={store} tellme={tellme}></Search> */}
     {/* <LifeCycle></LifeCycle> */}
     <Provider value={store}>
     <Home/>
       {/* <Consumer>
         {
           
          ctx=><User {...ctx}></User>
         }
       </Consumer> */}
     </Provider>
     {/* <Home></Home> */}
     <Button></Button>
    </div>
  );
}

export default App;

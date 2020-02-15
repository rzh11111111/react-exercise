import React ,{useContext} from 'react';
// 1、
// const Context = React.createContext();
// const Provider = Context.Provider;
// 2.
import {Context,Provider} from '../AppContext';

export default function HooksContext(){
    const store = {
        user:{
            name:"Tom"
        }
    };
    return( 
    <div>
        <Provider value={store}>
            <ContextChild/>
        </Provider>
        HooksContext
        
        </div>)
}


function ContextChild(props){
    //useContext用于在快速在函数组件中导入上下文
    const {user} = useContext(Context)
    console.log(useContext(Context))
    return(
         <div>ContextChild
             <p>name:{user.name}</p>
         </div>
         )
}
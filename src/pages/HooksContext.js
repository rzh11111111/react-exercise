import React ,{useContext} from 'react';

const Context = React.createContext();
const Provider = Context.Provider;

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
    const {user} = useContext(Context)
    console.log(useContext(Context))
    return(
         <div>ContextChild
             <p>name:{user.name}</p>
         </div>
         )
}
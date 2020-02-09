import React , {useReducer, useEffect} from "react";
import { FruitList } from "../components/Fruit";

function fruitsReducer(state,action){//第一个参数当前状态，第二个参数是dispatch传递的
    switch(action.type){
        case 'init':
            case "replace":
            return action.payload;
        default:
        return state;
    }
}

export default function HooksReducer(){
    const [fruits,dispatch]=useReducer(fruitsReducer,[]);
    useEffect(()=>{
        setTimeout(()=>{
            dispatch({type:'init',payload:['apple','banana']})
        },1000)
        return ()=>{

        }
    },[])
    return (<div>
        HooksReducer
        <FruitList fruits={fruits} setFruits={(newFruitList)=>dispatch({type:'replace',payload:newFruitList})}/>
        </div>)
}
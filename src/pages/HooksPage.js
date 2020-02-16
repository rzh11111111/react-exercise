import React , {useState,useEffect} from "react"
import { AddFrult ,FruitList } from "../components/Fruit";
//hooks就是给函数组件提供状态
export default function HooksPage(){
    const [date,setDate] = useState(new Date());
    const [fruits, setFruits] = useState(["apple","banana"]);
    useEffect(()=>{
        const timerId = setInterval(()=>{
            setDate(new Date());
        },1000)
        return ()=>clearInterval(timerId)
    },[date])//只有在第二个参数发生变化（首次渲染）的时候才会触法effects
   
    return (
    <div>
        HooksPage
        <p>{date.toLocaleTimeString()}</p>
      
        <AddFrult addFrult={item=>setFruits([...fruits,item])}></AddFrult>
        <FruitList fruits={fruits} setFruits={setFruits}/>
        </div>
    )
}


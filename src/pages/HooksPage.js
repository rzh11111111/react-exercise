import React , {useState,useEffect} from "react"

export default function HooksPage(){
    const [date,setDate] = useState(new Date());
    const [fruits, setFruits] = useState(["apple","banana"]);
    useEffect(()=>{
        const timerId = setInterval(()=>{
            setDate(new Date());
        },1000)
        return ()=>clearInterval(timerId)
    })
    return (
    <div>
        HooksPage
        <p>{date.toLocaleTimeString()}</p>
        <FruitList fruits={fruits} setFruits={setFruits}/>
        </div>
    )
}

function FruitList({fruits,setFruits}){
    const delCur =delIndex=>{
        const tem = [...fruits]
        tem.splice(delIndex,1);//点击删除
        setFruits(tem)  //修改date
    }
    return <div>
        <ul>
            {
                fruits.map((item,index)=>{
                return <li key={'fruit'+index} onClick={()=>delCur(index)}>{item}</li>
                })
            }
        </ul>
    </div>
}
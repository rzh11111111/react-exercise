import React , {useState} from "react"

export function AddFrult({addFrult}){
    const [name,setName]=useState("")
    return (
        <div>
        <input value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={()=>addFrult(name)}>点击添加</button>
        </div>
    )
}

export function FruitList({fruits,setFruits}){
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
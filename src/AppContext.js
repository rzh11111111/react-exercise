import React from 'react'
export const Context = React.createContext()
export const Provider = Context.Provider
export const Consumer = Context.Consumer

//高阶组件Hoc+组件传值
//定义：高阶组件是一个工厂函数，他接受一个组件并返回另一个组件
export const consumerHandle = Cmp => props =>{
    return <Consumer>{ ctx=><Cmp {...props} {...ctx}></Cmp> }</Consumer>
    }
import React , {Component} from 'react'
export default class LifeCycle extends Component {
    constructor(props){
        super(props);
        this.state={
            counter:0,
        };
        console.log("constructor",this.state.counter)
    }

    // componentWillMount(){//即将废弃
    //     console.log("componentWillUnmount",this.state.counter)
    // }
    static getDerivedStateFromProps(props,state){
        //getDerivedStateFromProps 会在调用render方法之前调用
        //并且在初始挂载及后续更新时都会被调用。
        //它应返回一个对象来更新 state，如果返回null则不更新任何内容
        const {counter} = state
        console.log("getDerivedStateFromProps",counter)
        return counter<8?null:{counter:0}
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        const {counter} = prevState;//上次的值
        console.log("getSnapshotBeforeUpdate",counter);
        return null;
    }
    componentDidMount(){
        console.log("componentDidmount",this.state.counter)
    }
    componentWillUnmount(){
        console.log("componentWillUnmount",this.state.counter)
    }

    // componentWillUpdate(){ 、、即将废弃
    //     console.log("componentWillUpdate",this.state.counter)
    // }

    componentDidUpdate(){
        console.log("componentDidUpdate",this.state.counter)
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate",this.state.counter,nextState.counter)
        return true;
        //true的话就会render视图更新（值还是变），false的话render就不会更新，可以控制
    }
    setCounter=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    render(){
        console.log("render",this.state.counter)
        const {counter}=this.state
        return (
            <div>LifeCycle
                <p>{counter}</p>
                <button onClick={this.setCounter}>改变counter</button>
            
            {!!(counter % 2) &&<Foo/>}
            </div>
        )
    }
}
class Foo extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount",'Foo')
    }
    render(){
        return <div>我是Foo</div>
    }
}
import React , {Component} from 'react'
export default class LifeCycle extends Component {
    constructor(props){
        super(props);
        this.state={
            counter:0,
        };
        console.log("constructor",this.state.counter)
    }

    componentWillMount(){
        console.log("componentWillUnmount",this.state.counter)
    }

    componentDidMount(){
        console.log("componentDidmount",this.state.counter)
    }
    componentWillUnmount(){
        console.log("componentWillUnmount",this.state.counter)
    }
    componentWillUpdate(){
        console.log("componentWillUpdate",this.state.counter)
    }

    componentDidUpdate(){
        console.log("componentDidUpdate",this.state.counter)
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate",this.state.counter,nextState.counter)
        return true;//true的话就会render视图更新（值还是变），false的话render就不会更新，可以控制
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
            </div>
        )
    }
}
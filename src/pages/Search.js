import React, {Component} from "react";

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:""
        };
    }
    // state={  //写demo的时候可以这么写，
    //     name:''
    // }
    handle=()=>{
        console.log('handle');
    }
    change=(event)=>{
        let value=event.target.value
        this.setState({
            name:value
        })
        console.log("change",value)
    }
    render(){
        const {name} =this.state
        return (
            <div>
                <h1>search</h1>
                <button onClick={this.handle}>click</button>
                <input value={name} onChange={this.change}></input>
            </div>
        )
    }
}
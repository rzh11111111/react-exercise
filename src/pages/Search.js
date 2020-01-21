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
        //父级向子级传递数据
        const {userInfo} = this.props.store;
        console.log('this',this)

        return (
            <div>
                <h1>search</h1>
                <h2>{userInfo.userName}</h2>
                <button onClick={this.handle}>click</button>
                <input value={name} onChange={this.change}></input>
            </div>
        )
    }
}
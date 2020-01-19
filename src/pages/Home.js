import React, {Component} from "react";
export default class Home extends Component {
    constructor(props){ //状态管理生命周期
        super(props);
        this.state= {
            date:new Date()
        }
    }
    //组件挂载完成之后
    componentDidMount(){
    //    this.timerId = setInterval(() => {
    //         this.setState({
    //             date:new Date()
    //         })
    //     }, 1000);
    }
    //组件卸载成功
    componentWillUnmount(){
        // clearInterval(this.timerId)
    }
    render() {
        const ceshi = '11111'
        const {date} = this.state
        console.log(date,typeof date)
        return (<div>
            <h1>Home</h1>
            <h2>{ceshi}</h2>
            <h3>{date.toString()+','+date.toLocaleDateString()}</h3>
            </div>);
    }
}
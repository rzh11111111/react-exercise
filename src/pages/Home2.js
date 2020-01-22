import React, {Component} from "react";
export default class Home2 extends Component {
    constructor(props){ //状态管理生命周期
        super(props);
        //使用state属性维护状态，在构造函数中初始化状态
        this.state= {
            date:new Date(),
            counter:0
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
    setCounter=()=> {
        // setTimeout(()=>{
            
//             this.setState({//https://www.jianshu.com/p/799b8a14ef96
//  //通过js的事件绑定程序 addEventListener 和使用setTimeout/setInterval 
// //等 React 无法掌控的 APIs情况下，setState是同步更新state
//                 counter:this.state.counter + 2,
//             })
//             console.log(this.state.counter)
//         },0)
        
        //接收两个函数参数，第一个函数调用更新state，第二个函数是更新完之后的回调
        this.setState((nextState,props) => { 
            console.log(nextState,props)
            return {
                counter:nextState.counter +1
            }
        })
        //此时nextState更新，但this.counter没更新
        //多次this.setstate会合并到一起一起更新，最后就是0直接到3
        this.setState((nextState,props) => { //
            console.log(nextState,props)
            return {
                counter:nextState.counter +2
            }
        })
        console.log(this.state.counter)


       
    }
    // setCounter=async ()=> { //async await
    //     await this.setState({ //
    //         counter:this.state.counter +1
    //     })
    //     await this.setState({ //
    //         counter:this.state.counter +2
    //     })



    //     console.log(this.state.counter)
    // }

    // setCounter=()=> {
    //     this.setState({ //异步
    //         counter:this.state.counter +1
    //     })
    //     this.setState({ //异步，打印2，因为2个拿到的this.state.counter都是0
    //         counter:this.state.counter +2
    //     })



    //     console.log(this.state.counter)
    // }
    render() {
        const ceshi = '11111'
        const {date,counter} = this.state
        console.log(date,typeof date)
        return (<div>
            <h1>Home2</h1>
            <h2>{ceshi +"+"+ counter}</h2>
            <h3>{date.toString()+','+date.toLocaleDateString()}</h3>
            <button onClick={this.setCounter}>改变counter</button>
            </div>);
    }
}
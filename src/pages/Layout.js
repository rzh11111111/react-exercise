import React , {Component} from 'react'

export default class Layout extends Component {
    componentDidMount(){
        const{title="商城"}=this.props
        //不传title默认商城，传了就是title
        document.title=title
    }
    render(){
        const {children , showTabBar}= this.props
        console.log(this.props)
        return (
        <div>
        {this.props.children}
        {/* 组件 */}
        </div>
        )
    }
}
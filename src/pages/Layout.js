import React , {Component} from 'react'

export default class Layout extends Component {
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
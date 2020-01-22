import React, {Component} from 'react'
import { Consumer } from '../AppContext'

export default class Home extends Component {
    render(){
        console.log('home',this.props)
        return <Consumer>
                {
                    ctx=><HomeHandle {...ctx}/>
                }
            </Consumer>
        
    }
}
function HomeHandle(props){
    console.log(props)
    return (
        <div>
            <h1>home</h1>
        </div>
    )
}
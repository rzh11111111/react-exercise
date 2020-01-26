import React, {Component} from 'react'
import { Consumer } from '../AppContext'
import Layout from './Layout';

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
        <Layout showTabBar= {false} title="商城首页">
        <div>
            <h1>home</h1>
        </div>
        </Layout>
    )
}
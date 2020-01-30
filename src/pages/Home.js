import React, {Component} from 'react'
import { consumerHandle } from '../AppContext'
import Layout from './Layout';

// export default class Home extends Component {
//     render(){
//         console.log('home',this.props)
//         return <Consumer>
//                 {
//                     ctx=><HomeHandle {...ctx}/>
//                 }
//             </Consumer>
        
//     }
// }
function HomeHandle(props){
    console.log(props)
    return (
        <Layout showTabBar= {false} title="商城首页">
        {/* <div>
            <h1>home</h1>
        </div> */}
        {{
            btn:<button>home按钮</button>
        }}
        </Layout>
    )
}
export default consumerHandle(HomeHandle)
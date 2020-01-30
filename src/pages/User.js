import React, {Component} from 'react'
import {consumerHandle} from "../AppContext"
import Layout from "./Layout"




// export default class User extends Component {
//     render(){
//         // console.log('user',this.props)
//         return (
//             <Consumer>{ctx=><UserHandle {...ctx}/>}</Consumer>
//         )
//     }
// }
function UserHandle(props){
    return (
        <Layout title="用户信息页面">
           
                {{
            btn:<button>user按钮</button>
        }}
            
        </Layout>
    )
}
export default consumerHandle(UserHandle);

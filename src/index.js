import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//jsx语法用到了React.createElement,
//reactdom找到root并且把jsx生成的虚拟dom转换成真实dom放进去
ReactDOM.render(<App />, document.getElementById('root'));

//jsx语法
// const greet=<h1>woshigreet</h1>;
// const show = false;
// const a = [0,1,2,3]
    // const obj=[
    //     {
    //         name:'Tom',
    //         age:18
    //     },
    //     {
    //         name:'ketty',
    //         age:20
    //     }
    // ]
// const jsx= {
//     <div>
//     {show && greet} show为true展示greet，false不展示
//      <ul className=“logoooo”>
//     {
//         a.map((item,index)=>{
//             return <li key={'item'+index}>{item}</li>
//         })
//     }
//      </ul>
//      <ul>
//     {
//         obj.map((item,index)=>{
//             return <li key={'item'+index}>{item.name + "-" + item.age}</li>
//         })
//     }
//      </ul>
//     </div>
// };



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import React from 'react'
// import ReactDOM from 'react-dom'
// ReactDOM.render(
//     <h1>hello react</h1>,
//     document.getElementById('root')
// )

// import React from 'react'
// import ReactDOM from 'react-dom'
// const app = <h1>hello react</h1>
// ReactDOM.render(
//     app,
//     document.getElementById('root')
// )



//1.函数式组件
//第一种方式-定义函数式组件 无状态组件
// import React from 'react'
// import ReactDOM from 'react-dom'
// const app = (props) => <h1>欢迎来到{props.name}的世界</h1>
// ReactDOM.render(
//     app({ name: 'react' }),
//     document.getElementById('root')
// )

//JSX风格的函数式组件
// //一个完整的函数式组件
// import React from 'react'
// import ReactDOM from 'react-dom'
// //组件名必须大写
// const App = (props) => <h1>欢迎来到{props.name}的世界</h1>
// ReactDOM.render(
//     <App name="react" />,
//     document.getElementById('root')
// )



// //2.Class组件
// //ES6的加入，让JS直接支持使用class来定义一个类，react的第二种创建组件的方式就是使用的类的继承，ES6 Class是目前官方推荐的使用方式，采用了ES6标准语法来构建
// import React from 'react'
// import ReactDOM from 'react-dom'
// class App extends React.Component { 
//     render() { 
//         return (
//             //注意这里得用this.props.name,必须用this.props
//             <h1> 欢迎来到 {this.props.name}的世界</h1>
//         )
//     }
// }
// ReactDOM.render(
//     <App name="react" />,
//     document.getElementById('root')
// )

// //3.更老的一种方法
// //在16以前的版本还支持这样创建组件，但现在的项目基本上不用
// import React from 'react'
// React.creareClass({
//     render() { 
//         return (
//             <div>{this.props.xxx }</div>
//         )
//     }
// })


// //4.组件的组合、嵌套
// //将一个组件渲染到某一个节点里的时候，会将这个节点里原有内容覆盖
// //组件嵌套的的方式就是将子组件写到父组件的模板中去，且React没有Vue中的内容分发机制slot，所以我们在一个组件的模板中只能看到父子关系

// //从React的包当中引入了React和React.js的组件父类component
// //还引入了一个React.js里的一种特殊的组件Fragment
// import React, { Component, Fragment } from 'react'
// import ReactDOM from 'react-dom'
// class Title extends Component { 
//     render() { 
//         return (
//             <h1>欢迎进入React的世界</h1>
//         )
//     }
// }
// class Content extends Component{
//     render() {
//         return (
//             <p>React.js是一个构件UI的库</p>
//         )
//     }
// }
// class App extends Component { 
//     render() { 
//         return (
//             <div>
//                 <Title />
//                 <Content />
//             </div>
//         )
//     }
// }
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )
// // //由于每个React组件只能有一个根节点，所以需要渲染多个组件的时候，需要在最外层包一个容器，如果使用div，会生成多余一层DOM
// class App extends Component{
//     render() { 
//         return (
//             <Fragment>
//                 <Title />
//                 <Content />
//             </Fragment>
//         )
//     }
// }
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )


//5.关于JSX
//要明白JSX的原理，需要先明白如何用JS对象来表现一个DOM元素的结构
//看下面的例子
/* <div class='app' id='appRoot'>
    <h1 class='title'>欢迎进入React的世界</h1>
    <p>
        React.js 是一个帮助你构建页面 UI 的库
  </p>
</div> */
//上面这个HTML的所有的信息我们都可以用JS对象来表示
// {
//     tag: 'div',
//         attrs: { className: 'app', id: 'appRoot' },
//     children: [
//         {
//             tag: 'h1',
//             attrs: { className: 'title' },
//             children: ['欢迎进入React的世界']
//         },
//         {
//             tag: 'p',
//             attrs: null,
//             children: ['React.js 是一个构建页面 UI 的库']
//         }
//     ]
// }
//但是JS写起来太长了，结构看起来不够清晰，用HTML的方式看起来就方便很多了
//于是 React.js 就把 JavaScript 的语法扩展了一下，让 JavaScript 语言能够支持这种直接在 JavaScript 代码里面编写类似 HTML 标签结构的语法，这样写起来就方便很多了。编译的过程会把类似 HTML 的 JSX 结构转换成 JavaScript 的对象结构。
//下面代码

// import React from 'react'
// import ReactDOM from 'react-dom'

// class App extends React.Component {
//     render() {
//         return (
//             <div className='app' id='root'>
//                 <h1 className='title'>欢迎进入React的世界</h1>
//                 <p>
//                     React.js 是一个构建页面 UI 的库
//         </p>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )


//6.组件中的行内样式
//行内样式
//想给虚拟DOM添加行内样式，需要使用表达式传入样式对象的方式来实现
//注意这里的两个括号，第一个表示我们要在JSX里插入JS里，第二个是对象的括号
/* <p style={{color:'red',fontSize:'14px'}}>Hello world</p> */
//行内样式需要写入一个样式对象，而这个样式对象的位置可以放在很多地方，例如render函数里、组件原型上、外链JS文件中
//使用class
//React推荐我们使用行内样式，因为React觉得每一个组件都是一个独立的整体
//其实我们大多数情况下还是大量的在为元素添加类名，但是需要注意的是，class需要写成className,因为毕竟是在写类JS代码，会受到JS规则的限制，而class是关键字
/* <p className="hello" style={this.style }>Hello React</p> */
//不同的条件添加不同的样式
//有时候需要根据不同的条件添加不同的样式，比如：完成状态，完成是绿色，未完成是红色。那么这种情况下，我们推荐使用[classnames](<https://www.npmjs.com/package/classnames>)这个包：
//css-in-js
//`styled-components`是针对React写的一套css-in-js框架，简单来讲就是在js中写css。

//七.组件数据挂载方式
//1.属性（props）
//props是正常是外部传入的，组件内部也可以通过一些方式来处事初始化的设置，属性不能被组件自己更改，但是你可以通过父组件主动重新渲染的方式来传入新的props
//属性是描述性质、特点的，组件自己不能随意更改
//之前的组件diamante里面有props的简单实用，总的来说，在使用一个组件的时候，可以把参数放在标签的属性当中，所有的属性都会作为组件props对象的键值。通过箭头函数创建的组件，需要通过函数的参数来接受props
// import React, { Component, Fragment } from 'react'
// import ReactDOM from 'react-dom'
// class Title extends Component { 
//     render() { 
//         return (
//             <h1>欢迎进入{this.props.name}的世界</h1>
//         )
//     }
// }
// const Content = (props) => { 
//     return (
//         <p>{props.name }是一个构建UI的库</p>
//     )
// }
// class App extends Component{
//     render() { 
//         return (
//             <Fragment>
//                 <Title name='React'/>
//                 <Content name='React.js'/>
//             </Fragment>
//         )
//     }
// }
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )

//设置组件的默认props
// import React, { Component, Fragment } from 'react'
// import ReactDOM from 'react-dom'
// class Title extends Component {
//     //使用类创建的组件，直接在这里写static方法，创建defaultProps
//     static defaultProps = {
//         name: 'React'
//     }
//     render() {
//         return (
//             <h1>欢迎进入{this.props.name}的世界</h1>
//         )
//     }
// }
// const Content = (props) => {
//     return (
//         <p>{props.name}是一个构建UI的库</p>
//     )
// }
// //使用箭头函数创建的组件，需要在这个组件上直接写defaultProps属性
// Content.defaultProps = {
//     name: 'React.js'
// }
// class App extends Component {
//     render() {
//         return (
//             <Fragment>
//                 {/* 由于设置的defaultProps，不传props也能正常运行，如果传递了就会覆盖defaultProps的值 */}
//                 <Title />
//                 <Content />
//             </Fragment>
//         )
//     }
// }
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )

//props.children
//我们知道使用组件的时候，可以嵌套，要在自定义组件的使用嵌套结构，就需要使用props.children.在实际的工作当中，我们几乎每天都需要用这种方式来编写组件
// import React, { Component, Fragment } from 'react'
// import ReactDOM from 'react-dom'
// class Title extends Component { 
//     render() { 
//         return (
//             <h1>欢迎进入{this.props.children}的世界</h1>
//         )
//     }
// }
// const Content = (props) => { 
//     return (
//         <p>{props.children}</p>
//     )
// }
// class App extends Component { 
//     render() { 
//         return (
//             <Fragment>
//                 <Title>React</Title>
//                 <Content><i>React.js</i>是一个构建UI的库</Content>
//             </Fragment>
//         )
//     }
// }
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )


//2.状态（state）
//状态就是组件描述某种显示情况的数据，由组件自己设置和更改，也就是说由组件自己维护，使用状态的目的就是为了在不同的状态下使组件的显示不同（自己管理）
//1.定义state
//第一种方式
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// class App extends Component { 
//     state = {
//         name: 'React',
//         isLiked:true
//     }
//     render() { 
//         return (
//             <div>
//                 <h1>欢迎来到{this.state.name}的世界</h1>
//                 <button>{this.state.isLiked ? '❤️收藏' : '🖤取消'}</button>
//                 <button>{this.state.isLiked ? '🖤取消' : '❤️收藏' }</button>
//             </div>
//         )
//     }
// }
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )

//另一种方式（推荐）
// import React, { Component } from 'react'
// import ReactDOM, { render } from 'react-dom'
// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             name: 'React',
//             isLiked: false
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>欢迎来到{this.state.name}的世界</h1>
//                 <button>{this.state.isLiked ? '❤️收藏' : '🖤取消'}</button>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )

//this.props和this.state是纯JS对象，在VUE中，data属性是利用Object.defineProperty处理过的，更改data的数据的是时候会触发数据的getter和setter，但是React中没有做这样的处理，如果直接更改的话，React是无法得知的，所以需要使用特殊的更改状态的方法setState

//（2）setState
//isLiked存放在实例的state对象当中，组件的render函数内，会根据组件的state的中的isLiked不同显示“取消”或“收藏”内容。下面给button加上了点击事件监听
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// class App extends Component { 
//     constructor() { 
//         super()
//         this.state = {
//             name: 'React',
//             isLiked:false
//         }
//     }
//     handleBtnClick = () => { 
//         this.setState({
//             isLiked:!this.state.isLiked
//         })
//     }
//     render() { 
//         return (
//             <div>
//                 <h1>欢迎来到{this.state.name}</h1>
//                 <button onClick={this.handleBtnClick }>{this.state.isLiked ? '❤️收藏' : '🖤取消'}</button>
//             </div>
//         )
//     }
// }
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )
//setState有两个参数
//第一个参数可以是对象，也可以是方法return一个对象，我们把这个参数叫做updater
//参数是对象
// this.setState({
//     isLiked:!this.state.isLiked
// })
//参数是方法
// this.setState((prevState, props) => { 
//     return {
//         isLiked:!prevState.isLiked
//     }
// })
//注意的是这个方法接收两个采纳数，第一个是上一次的state，第二个是props
//setState是异步的，所以想要获取到最新的state，没有办法获取，就有了第二个参数，这是一个可选的回调函数
// this.setState((prevState, props) => { 
//     return {
//         isLiked:!prevState.isLiked
//     }
// }, () => { 
//         console.log('回调里的',this.state.isLiked)
// })
// console.log('setState外部的',this.state.isLiked)

//3.属性VS状态
//相似点：都是纯JS对象，都会触发render更新，都具有确定性（状态/属性相同，结果相同）
//不同点：
// 1.属性能从父组件获取，状态不能
// 2.属性可以由父组件修改，状态不能
// 3.属性能在内部设置默认值，状态也可以
// 4.属性不在组件内部修改，状态要改
// 5.属性能设置子组件初始值，状态不可以
// 6.属性可以修改子组件的值，状态不可以
//state的主要作用是用于组件保存、控制、修改自身的可变状态。state在组件内部初始化，可以被组件自身修改，而外部不能访问也不能修改，你可以认为state是一个局部的、只能被组件自身控制的数据源。state中状态可以通过this.setState方法进行更新，setState会导致组件的重新渲染
//props的主要作用是让使用该组件的父组件可以传入参数来配置该组件。他是外部传进来的配置参数，组件内部无法控制也无法修改。除非外部组件主动传入行的props，否则组价的props永远保持不变
//如果搞不清state和props的使用常见，记住一个简单的规则：尽量少地用state，多用props
//没有state的组件叫做无状态组件（stateless component），设置了state叫做有状态组件（stateful component）。因为状态会带来管理的的复杂性，我们也尽量多地写无状态组件，尽量少写有状态的组件。这样会降低代码维护的难度，也会在一定程度上增强组件的可复用性
//4、状态提升
//如果有多个组件共享一个数据，把这个数据放到共同的父级组件中来管理
//5、受控组件与非受控组件
//React组件的数据渲染是否被调用者传递的props完全控制，控制则为受控组件，否则非受控组件
//6、渲染数据
//条件渲染
//{condition？'❤️取消' : '🖤收藏'}
//列表渲染
//数据
// const people = [{
//   id: 1,
//   name: 'Leo',
//   age:35
// }, {
//     id: 2,
//     name: 'XiaoMing',
//   age:16,
//   }]
// //渲染列表
// {
//   people.map(person => { 
//     return (
//       <dl key={person.id}>
//         <dt>{person.name}</dt>
//         <dt>age:{person.age}</dt>
//       </dl>
//     )
//   })
// }
//React的高效依赖于所谓的Virtual-DOM，尽量不碰DOM。对于列表元素来说会有一个问题：元素可能会在一个列表中改变位置。要实现这个操作，只需要交换一下DOM位置就行了，但是React并不知道其实我们只要改变了元素的位置，所以他会重新渲染后面两个元素（再执行Virtual-DOM）,这样会大大增加DOM操作，但如果给每个元素加上唯一的表示，React就可以知道这两个元素只是交换了位置，这个标识就是key，这个key必须是每个元素唯一的标识
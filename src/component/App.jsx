// import React from 'react';
//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             data: 0
//         }
//         this.setNewNumber = this.setNewNumber.bind(this)
//     };
//     setNewNumber() {
//         this.setState({data: this.state.data + 1})
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick = {this.setNewNumber}>INCREMENT</button>
//                 <Content myNumber = {this.state.data}></Content>
//             </div>
//         );
//     }
// }
// class Content extends React.Component {
//     componentWillMount() {
//         console.log('Component WILL MOUNT!')
//     }
//     componentDidMount() {
//         console.log('Component DID MOUNT!')
//     }
//     componentWillReceiveProps(newProps) {
//         console.log('Component WILL RECIEVE PROPS!')
//     }
//     shouldComponentUpdate(newProps, newState) {
//         return true;
//     }
//     componentWillUpdate(nextProps, nextState) {
//         console.log('Component WILL UPDATE!');
//     }
//     componentDidUpdate(prevProps, prevState) {
//         console.log('Component DID UPDATE!')
//     }
//     componentWillUnmount() {
//         console.log('Component WILL UNMOUNT!')
//     }
//     render() {
//         return (
//             <div>
//                 <h3>{this.props.myNumber}</h3>
//             </div>
//         );
//     }
// }
// export default App;

// import React from 'react';
//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             data: 'Initial data...'
//         }
//         this.updateState = this.updateState.bind(this);
//     };
//     updateState(e) {
//         this.setState({data: e.target.value});
//     }
//     render() {
//         return (
//             <div>
//                 <input type = "text" value = {this.state.data} placeholder={"Enter TExt"}
//                        onChange = {this.updateState} />
//                 <h4>{this.state.data}</h4>
//             </div>
//         );
//     }
// }
// export default App;

// import React from 'react';
// import {Content} from "./Content";
//
// export class App extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             data: 'Initial data...'
//         }
//         this.updateState = this.updateState.bind(this);
//     };
//     componentWillUnmount() {
//         console.log('Component WILL UNMOUNT!')
//     }
//     updateState(e) {
//         this.setState({data: e.target.value});
//     }
//     render() {
//         return (
//             <div>
//                 <Content myDataProp = {this.state.data}
//                          updateStateProp = {this.updateState}></Content>
//             </div>
//         );
//     }
// }
// export default App;
// import React from 'react';
//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             data: 'Initial data...'
//         }
//         this.updateState = this.updateState.bind(this);
//     };
//     updateState() {
//         this.setState({data: 'Data updated from the child component...'})
//     }
//     render() {
//         return (
//             <div>
//                 <Content myDataProp = {this.state.data}
//                          updateStateProp = {this.updateState}></Content>
//             </div>
//         );
//     }
// }
// class Content extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick = {this.props.updateStateProp}>CLICK</button>
//                 <h3>{this.props.myDataProp}</h3>
//             </div>
//         );
//     }
// }
// export default App;
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             data: ''
//         }
//         this.updateState = this.updateState.bind(this);
//         this.clearInput = this.clearInput.bind(this);
//     };
//     updateState(e) {
//         this.setState({data: e.target.value});
//     }
//     clearInput() {
//         this.setState({data: ''});
//         ReactDOM.findDOMNode(this.refs.myInput).focus();
//     }
//     render() {
//         return (
//             <div>
//                 <input value = {this.state.data} onChange = {this.updateState}
//                        ref = "myInput"></input>
//                 <button onClick = {this.clearInput}>CLEAR</button>
//                 <h4>{this.state.data}</h4>
//             </div>
//         );
//     }
// }
// export default App;

// import React from 'react';
//
// class App extends React.Component {
//     constructor() {
//         super();
//
//         this.state = {
//             data:[
//                 {
//                     component: 'First...',
//                     id: 1
//                 },
//                 {
//                     component: 'Second...',
//                     id: 2
//                 },
//                 {
//                     component: 'Third...',
//                     id: 3
//                 }
//             ]
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <div>
//                     {this.state.data.map((dynamicComponent, i) => <Content
//                         key = {i} componentData = {dynamicComponent}/>)}
//                 </div>
//             </div>
//         );
//     }
// }
// class Content extends React.Component {
//     render() {
//         return (
//             <div>
//                 <div>{this.props.componentData.component}</div>
//                 <div>{this.props.componentData.id}</div>
//             </div>
//         );
//     }
// }
// export default App;

// import ReactDOM from 'react-dom';
//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: 'coconut'};
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert('Your favorite flavor is: ' + this.state.value);
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Pick your favorite La {this.state.value}:
//                     <select value={this.state.value} onChange={this.handleChange}>
//                         <option value="grapefruit">Grapefruit</option>
//                         <option value="lime">Lime</option>
//                         <option value="coconut">Coconut</option>
//                         <option value="mango">Mango</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }
// export default App;
// class Square extends React.Component {
//     render() {
//         return (
//             <button className="square">
//                 {this.props.value}
//             </button>
//         );
//     }
// }\
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import React from 'react';
import './../index.css';
import Auth from "./Auth";
class App extends React.Component
{
    render() {
        return (
            <Switch>
                <Route exact path='/home' component={Home}/>
                <Route path='/login' component={Login}/>
                <Route path='/auth' component={Auth}/>
            </Switch>
        );
    }
}
export default App;
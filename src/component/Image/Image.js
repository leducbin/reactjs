import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {ShoppingList} from "../ShoppingList/ShoppingList";
export default class Image extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      // callback function exposed by GWT
        ReactDOM.render(<ShoppingList />,document.getElementById("root"));
    }
    render() {
        return (
            <div onClick={this.handleClick}><p>
              Click me!!!
            </p></div>
        );
    }
}

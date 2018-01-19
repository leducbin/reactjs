import React, { Component } from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class Home extends Component {
    constructor(props) {
        super(props);

    };
    clicksubmit()
    {
        fetch('//offline-news-api.herokuapp.com/stories')
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(stories) {
                console.log(stories);
            });
    }
    render() {
        return (
            <div class="container">
                <form action={"/auth"} method={"post"}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="password" class="form-control" id="password" aria-describedby="emailHelp" placeholder="Password"/>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={this.props.clicksubmit}>Submit</button>
                </form>
            </div>
        );
    }
}
export default Home;
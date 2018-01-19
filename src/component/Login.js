import React, { Component } from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:''
        };
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePass = this.updatePass.bind(this);
        this.clicksubmit = this.clicksubmit.bind(this);
    };
    updateEmail(e) {
        this.setState({email: e.target.value});
        console.log(this.state.email + this.state.password);
    }
    updatePass(e)
    {
        this.setState({password: e.target.value});
        console.log(this.state.email + this.state.password);
    }
    async clicksubmit()
    {
        if (this.state.email == "" || this.state.password == "" )
        {
            alert("Missing target");
        }
        else
        {
            var data = new FormData();
            data.append("email", this.state.email);
            data.append("password", this.state.password);
            try {
                const coursesResponse = await fetch(`http://localhost:8000/api/login`, {
                    method: "POST",
                    body: data,
                });

                if (coursesResponse.status !== 200) {
                    console.log(`Error getting courses: ${JSON.stringify(coursesResponse)}`);
                }
                console.log(coursesResponse.json());
                // const data = await coursesResponse.json();
                // console.log()
            } catch (e) {
                console.log("Caught exception on fetch courses", e);
            }
        }
    }
    render() {
        return (
            <div class="container">
                <form action={"/auth"} method={"post"}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.updateEmail} placeholder="Enter email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="password" class="form-control" id="password" aria-describedby="passwordHelp" value={this.state.password} onChange={this.updatePass} placeholder="Password"/>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={this.clicksubmit}>Submit</button>
                </form>
            </div>
        );
    }
}
export default Login;
import React, { Component } from 'react';

export default class Register extends Component {
    handleSubmit =(e)=>{
        e.preventDefault();
        console.log(e);
        //confrim passwords are the same

        let password = e.target.password.value;
        let confirmPass = e.target.confirmPass.value;
        if (password !== confirmPass){
            console.log('The passwords are not the same')
            return
        }
        // this will allow us to set up request to set up new user
        let myHeaders = new Headers();
        myHeaders.append('content-type', 'applicaton/json')

        let data = JSON.stringify({
            username: e.target.username.value,
            email: e.target.email.value,
            password: password
        })

    fetch('https://kekambas-blog.herokuapp.com/auth/users', {
            method: 'POST',
            headers: myHeaders,
            body: data
        }) .then (res => res.json())
            .then(data => console.log(data))
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <h3 className='text-center'> Register Here!</h3>
            <fieldset>
                <label htmlFor='Username'> Username </label>
                <input type='text' name='username' className='form-control' placeholder='Username'></input>
            </fieldset>
            <fieldset>
                <label htmlFor='email'> Email </label>
                <input type='email' name='email' className='form-control' placeholder='Email'></input>
            </fieldset>
            <fieldset>
                <label htmlFor='password'> Password </label>
                <input type='password' name='password' className='form-control' placeholder='Password'></input>
            </fieldset>
            <fieldset>
                <label htmlFor='ConfirmPass'> Confirm Password </label>
                <input type='password' name='confirmPass' className='form-control' placeholder='Confirm Password'></input>
            </fieldset>
            <input type='submit' className="btn btn-outline-primary w-100 mt-3" value="Register" />
        </form>
    );
  }
}

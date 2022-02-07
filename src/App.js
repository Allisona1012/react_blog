import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './views/Register';
import LoginPage from './views/LoginPage';
import Post from './views/Post';
import NewPost from './views/NewPost';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,
      message: null,
      category: null
    }
  }

  login = (token) => {
    this.setState({
      loggedIn: token
    })
  }

  logout = () => {
    this.setState({
      loggedIn: null
    })
    console.log('You have been logged out. See ya!')
  }
  
  render() {
    return (
      <>
        <Navbar loggedIn={this.state.loggedIn} logout={this.logout} />
        <div className='container'>
          
          <Routes>
            <Route path='/' element={<Post />}/>
            <Route path='register' element={<Register />}/>
            <Route path='login' element={<LoginPage logIn={this.login}/>} />
            <Route path='/newpost' element={<NewPost token={this.state.loggedIn}/>} />
          </Routes>
        </div>
      </>
    );
  }
}
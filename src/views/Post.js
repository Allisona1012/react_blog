import React, { Component } from 'react';
import PostCard from '../components/PostCard';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    
    componentDidMount() {
        fetch("https://kekambas-blog.herokuapp.com/blog/posts")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                posts: data
            })
        })
        .catch(error => console.log('error', error));
    }

    render() {
    return (
        <div>
            <h1 className='text-center'>Posts</h1>
            {this.state.posts.map((p,k) => <PostCard post={p} key={k}/> )}
        </div>
    );
  }
}
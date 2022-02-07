import React, { Component } from 'react';

export default class PostCard extends Component {
  render() {
    return (
        <div className="card p-3 mt-3 bg-light text-dark border border-secondary border-3 ">
        <div className="card-body">
            <h5 className="card-title">{ this.props.post.title }</h5>
            <h6 className="card-title">{ this.props.post.author.username }</h6>
            <p className="card-text">{ this.props.post.content }</p>
        </div>
    </div>

    );
  }
}

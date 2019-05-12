import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import nodePostList from "../../jsonFiles/nodePosts.json";
import "./stylesheet/NodePostsListStyle.css";

export default class NodePostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      slug: null,
      postDetails: null
    };
  }

  redirectHandler = (e, slug, postDetails) => {
    this.setState({
      redirect: true,
      slug: slug,
      postDetails: postDetails
    });
  };

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          push
          to={{
            pathname: `${process.env.PUBLIC_URL}/${this.state.slug}`,
            state: { postDetails: this.state.postDetails }
          }}
        />
      );
    }

    return (
      <div className="reactPostList">
        {nodePostList.map(post => {
          let slug = post.slug;
          let postDetails = post;

          return (
            <div key={post.id} className="postListContainer">
              <p
                // to={`${process.env.PUBLIC_URL}/react/${post.slug}`}
                onClick={e => {
                  this.redirectHandler(e, slug, postDetails);
                }}
                className="postTitle"
              >
                {post.title}
              </p>
              <p className="preText">{post.preText}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

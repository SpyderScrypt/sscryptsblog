import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import allPostList from "../../jsonFiles/allPosts.json";
import "./stylesheet/AllPostsListStyle.css";

export default class AllPostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      slug: null
    };
  }

  redirectHandler = (e, slug) => {
    this.setState({
      redirect: true,
      slug: slug
    });
  };

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          push
          to={{
            pathname: `${process.env.PUBLIC_URL}/${this.state.slug}`
          }}
        />
      );
    }

    return (
      <div className="reactPostList">
        {allPostList.map(post => {
          let slug = post.slug;

          return (
            <div key={post.id} className="postListContainer">
              <p
                // to={`${process.env.PUBLIC_URL}/react/${post.slug}`}
                onClick={e => {
                  this.redirectHandler(e, slug);
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

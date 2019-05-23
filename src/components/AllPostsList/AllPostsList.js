import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { firestore } from "../../firebase/firebase";
import { Helmet } from "react-helmet";

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

  componentDidMount = async () => {
    const doc = await firestore
      .collection("posts")
      .doc("R6yws2OQAuVNtF36PQgH")
      .get();

    let allPostPageCount = doc.data().allPosts;

    firestore
      .collection("posts")
      .doc("R6yws2OQAuVNtF36PQgH")
      .update({
        allPosts: allPostPageCount + 1
      });
  };

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
        <Helmet>
          <meta charSet="utf-8" />
          <title>Latest Posts</title>
          <meta
            name="description"
            content="Latest React, Node, Javascript Tutorial"
          />
          <meta
            name="keywords"
            cpntent="react,node,javascript,node.js,react.js,algorithm"
          />
        </Helmet>
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

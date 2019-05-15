import React, { Component } from "react";
import "./stylesheet/SinglePostContainerStyle.css";

export default class SinglePostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { module: null, selectedPost: null };
  }
  componentDidMount() {
    // console.log("location", this.props.location.pathname.split("/")[1]);
    // Dynamically import Json file
    import(
      `../../jsonFiles/${this.props.location.pathname.split("/")[1]}Posts.json`
    ).then(module => {
      module.default.forEach(post => {
        if (post.id === this.props.match.params.slug) {
          this.setState({
            selectedPost: post
          });
        }
      });

      // Dynamically import component

      import(`../${this.state.selectedPost.path}.js`).then(module => {
        this.setState({ module: module.default });
      });
    });

    // reactPosts.forEach(post => {
    //   if (post.id === this.props.match.params.slug) {
    //     this.setState({
    //       selectedPost: post
    //     });
    //   }
    // });

    // import(`../${this.state.selectedPost.path}.js`).then(module => {
    //   this.setState({ module: module.default });
    // });
  }
  render() {
    const { module: Component } = this.state;

    return (
      <div className="post-container">
        {Component ? (
          <Component postDetails={this.state.selectedPost} />
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
}

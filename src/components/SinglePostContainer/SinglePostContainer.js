import React, { Component } from "react";
import "./stylesheet/SinglePostContainerStyle.css";
import reactPosts from "../../jsonFiles/reactPosts.json";

export default class SinglePostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { module: null, selectedPost: null };
  }
  async componentDidMount() {
    // Dynamically import component

    await reactPosts.forEach(post => {

      if (post.id === this.props.match.params.slug) {
        this.setState({
          selectedPost: post
        });
      }
    });

    import(`../${this.state.selectedPost.path}.js`).then(module => {
      this.setState({ module: module.default });
    });
  }
  render() {
    const { module: Component } = this.state;

    return (
      <div className="post-container">
        {Component && <Component postDetails={this.state.selectedPost} />}
      </div>
    );
  }
}

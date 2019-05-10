import React, { Component } from "react";
import "./stylesheet/SinglePostContainerStyle.css";

export default class SinglePostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { module: null };
  }
  componentDidMount() {
    // Dynamically import component
    import(`../${this.props.location.state.postDetails.path}.js`).then(
      module => {
        this.setState({ module: module.default });
      }
    );
  }
  render() {
    const { module: Component } = this.state;

    return (
      <div className="post-container">
        {Component && (
          <Component postDetails={this.props.location.state.postDetails} />
        )}
      </div>
    );
  }
}

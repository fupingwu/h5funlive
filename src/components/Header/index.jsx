import React, { Component } from "react";

import "./index.scss";

export default class Header extends Component {
  render() {
    const { a } = this.props;
    // const a = 123;
    return (
      <div className="header-wrapper">
        {a}哈哈啊哈<div></div>
      </div>
    );
  }
}

"use client"

import React from "react";
import Typed from 'typed.js'
// Import the desired words

const words = ["Hunting", "Learning"]

class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      cursorChar: " ",
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }
componentWillUnmount() {
    // Please don't forget to cleanup animation layer
    this.typed.destroy();
  }
  
  render() {
    return (
      <>
        <span
          style={{ whiteSpace: "pre" }}
          ref={(el) => {
            this.el = el;
          }}
		  className="text-3xl font-extrabold"
        />
      </>
    );
  }
}
export default Typing;
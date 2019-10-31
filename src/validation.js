/*
 * @Author: Arif Dogru
 * @Date: 2019-07-08 14:16:05
 * @Last Modified by: arif.dogru
 * @Last Modified time: 2019-11-01 01:06:29
 */
import React from "react";

/**
 * @author Arif Dogru
 */

class Validation extends React.Component {
  render() {
    return (
      <div className={this.props.div_class}>
        {this.props.validation_messages.map((message, index) => {
          return (
            <div key={index} className="alert alert-danger" role="alert">
              {message}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Validation;

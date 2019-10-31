/*
 * @Author: Arif Dogru
 * @Date: 2019-07-08 14:15:58
 * @Last Modified by: arif.dogru
 * @Last Modified time: 2019-11-01 00:57:47
 */
import React from "react";
/**
 * @author Arif Dogru
 */

class Alert extends React.Component {
  
  render() {
    if (!this.props.message) {
      return <div />;
    }
    return (
      <div className={this.props.div_class}>
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <p>{this.props.message}</p>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={this.props.clearAlertMessage}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Alert;
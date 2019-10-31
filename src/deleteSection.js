import React from "react";
class DeleteSection extends React.Component {


    
    render() {

        return(
        <div >
            <h1>Delete Ticket</h1>
            <label className="col-sm-2 col-form-label">{"Port"}</label>
                <div className="col-sm-10">
                    <input className="form-control"
                        id="port"
                        type="text"
                        onChange={this.props.onPortChange}
                        placeholder="SAW..."
                        value={this.props.port} />
                </div>
                <button
                        type="button"
                        className="btn btn-info"
                        onClick={this.props.onDeleteClick}
                        style={{
                            backgroundColor: "#2988bc"
                        }}
                            
                            
                        >Delete
                </button>  
        </div>
        )
    }
}

export default DeleteSection;
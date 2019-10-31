import React from "react";
class SearchSection extends React.Component {

    render() {
        return(
        <div >
            <h1>Search Ticket</h1>
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
                        onClick={this.props.onSearchClick}
                        style={{
                            backgroundColor: "#2988bc"
                        }}
                            
                            
                        >Search
                </button>  
        </div>
        )
    }
}

export default SearchSection;
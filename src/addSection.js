import React from "react";

class AddSection extends React.Component {
    render() {
        return(
            <div >
                    <h1>Add Ticket</h1>
                    <label className="col-sm-2 col-form-label">Port</label>
                    <div className="col-sm-10">
                        <input className="form-control"
                            id="port"
                            type="text"
                            onChange={this.props.onPortChange}
                            placeholder="SAW..."
                            value={this.props.port} />
                    </div>
                    <label className="col-sm-2 col-form-label">City</label>
                    <div className="col-sm-10">
                        <input className="form-control"
                            id="city"
                            type="text"
                            placeholder="IST..."
                            onChange={this.props.onCityChange}
                            value={this.props.city} />
                    </div>
                    <label className="col-sm-2 col-form-label">Country</label>
                    <div className="col-sm-10">
                        <input className="form-control"
                            id="country"
                            type="text"
                            placeholder="TR..."
                            onChange={this.props.onCountryChange}
                            value={this.props.country} />
                    </div>
                    <button
                        type="button"
                        className="btn btn-info"
                        onClick={this.props.onSaveClick}
                        style={{
                            backgroundColor: "#2988bc"
                        }}
                            
                            
                        >Add
                    </button>  
                </div>
        )
    }
}

export default AddSection;
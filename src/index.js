import React from 'react';
import ReactDOM from 'react-dom';
import AddSection from "./addSection"
import DeleteSection from "./deleteSection"
import SearchSection from "./searchSection"
import {spring} from "./apis/spring"
import 'bootstrap/dist/css/bootstrap.min.css';
import urls from "./apis/urls"
import Alert from "./alert"
import Validation from "./validation"
class MyForm extends React.Component {
  state={
    port:undefined,
    city:undefined,
    country:undefined,
    searchResult:undefined,
    deleteResult:undefined,
    action_message:"",
    validation_messages:[]
  }

  componentDidMount = () =>{
    spring().get(urls.TICKETS).then( response =>{
      console.log(response.data);
      this.setState({data:response.data})
    })
  }
  onPortChange = e => {
    e.preventDefault();
    this.setState({ port: e.target.value });
  };

  onCityChange = e => {
      e.preventDefault();
      this.setState({ city: e.target.value });
  };

  onCountryChange = e => {
      e.preventDefault();
      this.setState({ country: e.target.value });
  };

  onSaveClick = () => {
    let body = {
        airPort:this.state.port,  
        city:this.state.city,
        country:this.state.country
    }
    console.log("yollanan obje",body);
    if(this.validation()){
      spring().post(urls.TICKETS,body).then(result => {
        console.log(result);
          if (result.status === 201 || result.status === 200) {
              this.setState({ action_message: "Ticket added successfuly" });
              this.resetWindow();
          }
      }).catch(err => {
          console.log("SaveError -> ", err);
          this.resetWindow();
      });
    }else{
      this.setState({ action_message: "" });
    }
  }
    // get parameters eklenecek
  onSearchClick = () => {
    let airPort=this.state.port
    this.setState({searchResult:""})
    spring().get(`${urls.TICKETS}/ports/${airPort}`).then(result => {
      console.log(result);
        if (result.status === 201 || result.status === 200 ) {
          if(result.data.length !==0)
            this.setState({ action_message: "Ticket found successfuly" , searchResult: result.data});
          else
            this.setState({ action_message: "Ticket not found by airport"})

          console.log(this.state);
          this.resetWindow();
        }
    }).catch(err => {
        console.log("delete error -> ", err);
        this.resetWindow();
    });
  }
  onDeleteClick = () => {
    let airPort = this.state.port

    console.log("yollanan obje",airPort);
    if( airPort !== "" && airPort !== undefined && airPort !== null){
      spring().delete(`${urls.TICKETS}/${airPort}`).then(result => {
        console.log(result);
          if (result.status === 201 || result.status === 200) {
              this.setState({ action_message: "Ticket deleted successfuly" });
              this.resetWindow();
          }
      }).catch(err => {
          console.log("delete error -> ", err);
          this.resetWindow();
      });
    }else{
      let validation_messages = [];
      validation_messages.push("Empty airport can't delete");
      
      this.setState({ action_message: "" , validation_messages:validation_messages});
    }
  } 
  resetWindow() {
    try {
      spring().get(urls.TICKETS).then( response =>{
        console.log(response.data);
        this.setState({data:response.data})
      })
      this.setState({
        port:"",
        city:"",
        country:"",
        deleteResult:"",
        validation_messages: []
      });
    } catch (error) {
        console.log("Reset error -> ", error);
    }
  };
  clearAlertMessage = () => {
    this.setState({ action_message: "" });
  }

  validation() {
    let validation_messages = [];

    if (
      this.state.port === "" ||
      this.state.port === undefined ||
      this.state.port === null
    ) {
      validation_messages.push("Airport can't be empty");
    }

    if (
      this.state.city === "" ||
      this.state.city === undefined ||
      this.state.city === null
    ) {
      validation_messages.push("City can't be empty");
    }
    if (
      this.state.country === "" ||
      this.state.country === undefined ||
      this.state.country === null
    ) {
      validation_messages.push("Country can't be empty");
    }
    if (validation_messages.length > 0) {
      this.setState({ validation_messages });
      return false;
    } else {
      this.setState({ validation_messages });
      return true;
    }
  }
  render() {
    return (
      <form>
        <div className ="row" >
        <Validation
              div_class="col-md-12"
              validation_messages={this.state.validation_messages}
            />
          <Alert
            div_class="col-md-12"
            message={this.state.action_message}
            clearAlertMessage={this.clearAlertMessage}
            />
        <div className = "col-6">
          <AddSection
            onPortChange={this.onPortChange}
            onCityChange={this.onCityChange}
            onCountryChange={this.onCountryChange}
            onSaveClick={this.onSaveClick}
            port={this.state.port}
            city={this.state.city}
            country={this.state.country}
          /><hr></hr>
          <DeleteSection
            onPortChange={this.onPortChange}
            port={this.state.port}
            onDeleteClick={this.onDeleteClick}
          /><hr></hr>
          <SearchSection
            onPortChange={this.onPortChange}
            port={this.state.port}
            onSearchClick={this.onSearchClick}
          />
        </div>
        <div className = "col-6" >
        <h1>All Tickets</h1>
           {
                this.state.data ?  this.state.data.map(ticket =>{
                  return( <li key={ticket.id} style = {{backgroundColor: "#cce6ff" }}> Airport: {ticket.airPort}  City: {ticket.city}  Country: {ticket.country} </li>)
                }):""
                } 
                <hr></hr>
          <h1>Search Results</h1>
           {
                this.state.searchResult ? this.state.searchResult.map(ticket =>{
                  return( <li key={ticket.id} style = {{backgroundColor: "#e6eeff" }}> Airport: {ticket.airPort}  City: {ticket.city}  Country: {ticket.country} </li>)
                }):""
                } 
        </div>
        </div>
      </form>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));

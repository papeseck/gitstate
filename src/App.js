import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { ReactDOM } from "react";
import myImg from "./logo192.png";


export default class Person extends Component {
  state = {
    Person: {
      fullName: "Pape Seck",
      bio: "J'adore les jeux videos",
      img: myImg,
      profession: "je suis etudiant",
    },
    show: false,
  };

  ShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="render">
        {this.state.show && (
          <div>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.img} alt="Ma photo de profil"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </div>
        )}
        <div>
          <button onClick={this.ShowPerson} className="btn btn-primary">
            cliquer ici
          </button>
        </div>
        <div >

        </div>
      </div>
    );
  }
}

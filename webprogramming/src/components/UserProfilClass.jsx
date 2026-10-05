import { Component } from "react";

class UserProfileClass extends Component {
  state = {
    nama: "Renaldi Pasapan",
    isOnline: false,
  };

  toggleOnline = () => {
    this.setState((previousState) => ({ isOnline: !previousState.isOnline }));
  };

  render() {
    return (
      <div>
        <h3>User: {this.state.nama}</h3>
        <p>Status: {this.state.isOnline ? "Online" : "Offline"}</p>
        <button onClick={this.toggleOnline}>Ubah Status</button>
      </div>
    );
  }
}

export default UserProfileClass;

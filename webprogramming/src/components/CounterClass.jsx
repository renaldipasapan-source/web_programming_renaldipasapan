import { Component } from "react";

class CounterClass extends Component {
  state = { jumlah: 0 };

  tambah = () => {
    this.setState((previousState) => ({
      jumlah: previousState.jumlah + 1,
    }));
  };

  render() {
    return (
      <div>
        <h3>Jumlah: {this.state.jumlah}</h3>
        <button onClick={this.tambah}>Tambah</button>
      </div>
    );
  }
}

export default CounterClass;

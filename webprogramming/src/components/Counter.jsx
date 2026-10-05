import { useState } from "react";

function Counter() {
  const [jumlah, setJumlah] = useState(0);

  const tambah = () => setJumlah((previousJumlah) => previousJumlah + 1);
  const kurang = () => setJumlah((previousJumlah) => previousJumlah - 1);

  return (
    <div className="counter-box">
      <h2>Hitungan: {jumlah}</h2>
      <button onClick={tambah}>+</button>
      <button onClick={kurang}>-</button>
    </div>
  );
}

export default Counter;

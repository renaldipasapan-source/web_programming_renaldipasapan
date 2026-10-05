import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import NavbarUtama from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";
import KartuProfil from "./components/KartuProfil.jsx";
import KartuProfilClass from "./components/KartuProfilClass.jsx";
import Counter from "./components/Counter.jsx";
import UserProfileClass from "./components/UserProfilClass.jsx";
import CounterClass from "./components/CounterClass.jsx";
import {
  PrimaryButton,
  DangerButton,
  ButtonSimpan,
  ButtonEdit,
  ButtonHapus,
} from "./components/Button.jsx";

function Profil() {
  const nama = "Renaldi Pasapan";
  const umur = 19;

  return (
    <div>
      <p>Nama: {nama}</p>
      <p>Tahun Depan Umur: {umur + 1} tahun</p>
    </div>
  );
}

function formatNama(user) {
  return `${user.namaDepan} ${user.namaBelakang}`;
}

const user = { namaDepan: "Renaldi", namaBelakang: "Pasapan" };

function Sapaan() {
  return <h2>Selamat Datang, {formatNama(user)}!</h2>;
}

function StatusLogin() {
  const isLogin = true;

  return (
    <div>
      {isLogin ? <p>Selamat Datang Kembali!</p> : <p>Silakan Login Terlebih Dahulu</p>}
    </div>
  );
}

function ContohAturan() {
  return (
    <>
      <h3 className="judul">Contoh Aturan JSX</h3>
      <label htmlFor="email">Email: </label>
      <input id="email" type="text" />
      <p style={{ color: "red", fontSize: "12px" }}>Teks merah ukuran 12px</p>
      <button onClick={() => alert("Tombol diklik!")}>Klik Saya</button>
    </>
  );
}

function TombolAksi({ label, onClickHandler }) {
  return (
    <button onClick={onClickHandler} className="btn">
      {label}
    </button>
  );
}

function TampilanStatus({ status, angka }) {
  return <p>Status: {status} | Total: {angka}</p>;
}

function PengelolaAplikasi() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((previousCount) => previousCount + 1);
  const handleReset = () => setCount(0);

  return (
    <div>
      <TampilanStatus status={count > 0 ? "Aktif" : "Idle"} angka={count} />
      <TombolAksi label="Tambah Angka" onClickHandler={handleIncrement} />
      <TombolAksi label="Reset" onClickHandler={handleReset} />
    </div>
  );
}

function App() {
  return (
    <div>
      <div className="container">
        <NavbarUtama />
        <Header />
        <Sapaan />
        <StatusLogin />
        <ContohAturan />
        <main>
          <p>Selamat datang di dashboard pengelolaan keuangan!</p>
        </main>
        <KartuProfil nama="Renaldi Pasapan" pekerjaan="Mahasiswa" />
        <KartuProfilClass nama="JKT48" pekerjaan="SOON" />
        <PrimaryButton />
        <DangerButton />
        <Counter />
        <PengelolaAplikasi />
        <UserProfileClass />
        <CounterClass />
        <Card />
        <Profil />
        <ButtonSimpan />
        <ButtonEdit />
        <ButtonHapus />
        <Footer />
      </div>
    </div>
  );
}

export default App;

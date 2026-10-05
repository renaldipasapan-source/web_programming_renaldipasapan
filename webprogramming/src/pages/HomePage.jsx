import { useState } from "react";

function EmailForm() {
  const [email, setEmail] = useState("");

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <p>Isi menggunakan Email</p>
      <button type="submit">Klik Saya</button>
    </form>
  );
}

function ProfileCard({ nama, pekerjaan }) {
  return (
    <div>
      <h3>Nama: {nama}</h3>
      <p>Pekerjaan: {pekerjaan}</p>
    </div>
  );
}

function Counter() {
  const [jumlah, setJumlah] = useState(0);

  return (
    <div>
      <h2>Hitungan: {jumlah}</h2>
      <button onClick={() => setJumlah((nilaiSebelumnya) => nilaiSebelumnya + 1)}>+</button>
      <button onClick={() => setJumlah((nilaiSebelumnya) => nilaiSebelumnya - 1)}>-</button>
    </div>
  );
}

function StatusPengguna() {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div>
      <h3>User: Renaldi Pasapan</h3>
      <p>Status: {isOnline ? "Online" : "Offline"}</p>
      <button onClick={() => setIsOnline((statusSebelumnya) => !statusSebelumnya)}>
        Ubah Status
      </button>
    </div>
  );
}

function Jumlah() {
  const [jumlah, setJumlah] = useState(0);

  return (
    <div>
      <h3>Jumlah: {jumlah}</h3>
      <button onClick={() => setJumlah((nilaiSebelumnya) => nilaiSebelumnya + 1)}>
        Tambah
      </button>
    </div>
  );
}

function RingkasanStatus() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Status: {count > 0 ? "Aktif" : "Idle"} | Total: {count}</p>
      <button onClick={() => setCount((nilaiSebelumnya) => nilaiSebelumnya + 1)}>
        Tambah Angka
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <h2>Selamat Datang, Renaldi Pasapan!</h2>
      <p>Selamat Datang Kembali</p>
      <h3>Contoh Aturan JSX</h3>
      <EmailForm />
      <p>Selamat datang di dashboard pengelolaan keuangan!</p>
      <ProfileCard nama="Renaldi Pasapan" pekerjaan="Mahasiswa" />
      <ProfileCard nama="JKT48" pekerjaan="Soon" />
      <Counter />
      <RingkasanStatus />
      <StatusPengguna />
      <Jumlah />
      <p>Nama: Renaldi Pasapan</p>
      <p>Tahun Depan Umur: 20 tahun</p>
      <button>Edit Nama</button>
      <button>Edit Umur</button>
      <button>Hapus Data</button>
    </>
  );
}

export default HomePage;

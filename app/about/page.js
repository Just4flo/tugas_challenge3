import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-black text-white text-center flex flex-col items-center justify-center p-10"
    >
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-32 h-32 mx-auto rounded-full mt-4"
      />
      <h2 className="text-2xl font-bold mt-4">About</h2>
      <p className="mt-2">Informasi tentang saya.</p>
      <p className="mt-2 max-w-md">
        Perkenalkan nama saya Yudha Purnama, saya berasal dari Garut, dan saya
        adalah mahasiswa semester 4 di Universitas Masoem.
      </p>

<Link
  href="/"
  className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
>
  Kembali ke Beranda
</Link>

    </section>
  );
}

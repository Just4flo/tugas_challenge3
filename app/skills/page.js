import Link from "next/link";

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-black text-white text-center flex flex-col items-center justify-center p-10"
    >
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-32 h-32 mx-auto rounded-full mb-4"
      />
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <p className="text-lg mb-4">Daftar keterampilan yang saya miliki:</p>

      <div className="grid grid-cols-2 gap-4 text-lg font-semibold">
        <span className="bg-gray-800 py-2 px-4 rounded-lg">💻 JavaScript</span>
        <span className="bg-gray-800 py-2 px-4 rounded-lg">🌐 HTML</span>
        <span className="bg-gray-800 py-2 px-4 rounded-lg">🖥️ PHP</span>
        <span className="bg-gray-800 py-2 px-4 rounded-lg">🎨 CSS</span>
      </div>
          <Link
  href="/"
  className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
>
  Kembali ke Beranda
</Link>

    </section>
  );
}

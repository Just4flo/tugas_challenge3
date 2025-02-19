export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="w-full min-h-screen bg-black text-white text-center flex flex-col items-center justify-center p-10"
    >
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-32 h-32 mx-auto rounded-full mb-4"
      />
      <h2 className="text-3xl font-bold mb-2">Portfolio</h2>
      <p className="mb-4 text-lg">Beberapa proyek yang telah saya kerjakan.</p>

      <div className="max-w-lg text-center">
        <p className="text-lg font-semibold text-yellow-400">1. Website Jual Beli Komputer</p>
        <p className="text-gray-300 mb-2">
          Website ini memungkinkan pengguna untuk membeli dan menjual komputer dengan mudah.
        </p>

        <p className="text-lg font-semibold text-yellow-400">2. Sistem Informasi Akademik Pencatatan Nilai</p>
        <p className="text-gray-300">
          Sistem ini membantu pengelolaan nilai mahasiswa secara efisien dalam institusi pendidikan.
        </p>
      </div>
    </section>
  );
}

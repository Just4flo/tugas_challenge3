export default function About() {
  return (
    <div className="bg-gray-900 text-white">
      <main>
        <section id="about" className="w-full min-h-screen flex flex-col items-center justify-center bg-black text-white text-center p-10">
          <img src="/profile.jpg" alt="Profile" className="w-32 h-32 mx-auto rounded-full mb-4" />
          <h2 className="text-3xl font-bold">About</h2>
          <p className="text-lg">Perkenalkan, saya Yudha Purnama dari Garut, mahasiswa semester 4 di Universitas Masoem.</p>
        </section>

        <section id="skills" className="w-full min-h-screen flex flex-col items-center justify-center bg-white text-black text-center p-10">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-4 text-lg font-semibold">
            <span className="bg-gray-800 text-white py-2 px-4 rounded-lg">💻 JavaScript</span>
            <span className="bg-gray-800 text-white py-2 px-4 rounded-lg">🌐 HTML</span>
            <span className="bg-gray-800 text-white py-2 px-4 rounded-lg">🖥️ PHP</span>
            <span className="bg-gray-800 text-white py-2 px-4 rounded-lg">🎨 CSS</span>
          </div>
        </section>

        <section id="portfolio" className="w-full min-h-screen flex flex-col items-center justify-center bg-black text-white text-center p-10">
          <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
          <p className="text-lg">Saya telah mengerjakan beberapa proyek:</p>
          <p className="mt-2">📌 Website jual beli komputer</p>
          <p>📌 Sistem informasi akademik pencatatan nilai</p>
        </section>

        <section id="services" className="w-full min-h-screen flex flex-col items-center justify-center bg-white text-black text-center p-10">
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="text-lg">Layanan yang saya tawarkan:</p>
          <p className="mt-2">✅ Memperbaiki kode error dengan AI</p>
        </section>

        <section id="contact" className="w-full min-h-screen flex flex-col items-center justify-center bg-black text-white text-center p-10">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-lg">Hubungi saya:</p>
          <p className="mt-2">📧 Email: yp0363@gmail.com</p>
          <p>📞 WhatsApp: 08123456789</p>
        </section>
      </main>
    </div>
  );
}

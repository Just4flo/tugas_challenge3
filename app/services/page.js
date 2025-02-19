import Link from "next/link";

export default function Services() {
  return (
    <section
      id="services"
      className="w-full min-h-screen bg-black text-white text-center flex flex-col items-center justify-center p-10"
    >
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-32 h-32 mx-auto rounded-full mb-4"
      />
      <h2 className="text-3xl font-bold mb-2">Services</h2>
      <p className="text-lg mb-4">Layanan yang saya tawarkan:</p>

      <div className="max-w-md text-left">
        <p className="text-lg font-semibold text-yellow-400">🔧 Debugging & Error Fixing</p>
        <p className="text-gray-300 mb-2">
          Saya dapat membantu memperbaiki kode error dengan bantuan AI, sehingga proyek Anda berjalan lancar.
        </p>

        <p className="text-lg font-semibold text-yellow-400">🖥️ Web Development</p>
        <p className="text-gray-300">
          Saya dapat membangun dan mengembangkan website menggunakan teknologi modern.
        </p>
      </div>
    </section>
  );
}

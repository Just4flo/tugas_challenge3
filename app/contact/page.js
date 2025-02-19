import Link from "next/link";
export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-black text-white text-center flex flex-col items-center justify-center p-10"
    >
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-32 h-32 mx-auto rounded-full mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">Contact</h2>
      <p className="mb-1">Hubungi saya di sini.</p>
      <p className="text-lg font-medium">
        Email: <a href="mailto:yp0363@gmail.com" className="text-blue-400">yp0363@gmail.com</a> |
        WhatsApp: <a href="https://wa.me/08123456789" className="text-green-400">08123456789</a>
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

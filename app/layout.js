import "./globals.css";
import Navbar from "../components/Navbar"; // Gunakan "../" jika ada di root
// Gunakan "./" jika ada di `app/components/`

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

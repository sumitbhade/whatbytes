import "../../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}

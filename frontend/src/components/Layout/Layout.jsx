//Layout.jsx
///

//
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="app mt-5">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

import NavBar from "../components/NavBar";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: black;
        }
        * {
          padding: 0;
          margin: 0;
        }
      `}</style>
    </>
  );
}

export default MyApp;

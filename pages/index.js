import Aboutme from "../components/index/Aboutme";
import Carrer from "../components/index/Career";
import Header from "../components/index/Header";
import Intro from "../components/index/Intro";
import Link from "../components/index/Link";
import Project from "../components/index/Project";
import Skills from "../components/index/Skills";
import Footer from "../components/index/Footer";
import HeadTitle from "../components/HeadTitle";

export default function Home() {

  return (
    <div>
      <HeadTitle />
      <Header />
      <Intro />
      <Aboutme  />
      <Skills />
      <Link />
      <Project />
      <Carrer />
      <Footer />
    </div>
  );
}

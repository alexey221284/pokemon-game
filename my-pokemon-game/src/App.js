import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import './App.css';

const App = () => {
  const id='0';
  const title = 'Добро пожаловать';
  const descr = 'в портал Жумаева Тимофея';
  const descr2 = '';
  const title2 = 'Игры:';
  const link1 = 'https://alexey221284.github.io/zombie-attack';
  const link2 = 'https://alexey221284.github.io/xo-game';
  const linkTitle1 = 'Zombie attack';
  const linkTitle2 = 'XO game';
  const urlBg = '../assets/bg.jpg';
  const colorBg = 'orange';
  return ( 
    <>
      <Header 
          title={title}
          descr={descr}
          />
      <Layout
          id={id}
          title={title2}
          descr={descr2}
          link1={link1}
          linkTitle1={linkTitle1}
          link2={link2}
          linkTitle2={linkTitle2}
          urlBg={urlBg}
          />
      <Layout
          title={title}
          descr={descr}
          colorBg={colorBg}
          hideBackground
      />
      <Layout
          title={title}
          descr={descr}
          urlBg={urlBg}
      />
      <Footer />
    </>    
  )
}

export default App;
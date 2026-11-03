import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import './App.css';

const App = () => {
  const id='0';
  const title = 'This is title';
  const descr = 'This is Description!';
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
          title={title}
          descr={descr}         
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
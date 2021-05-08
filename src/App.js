// import logo from './logo.svg';
import './App.css';
//import { Button } from 'reactstrap';
import Particles from 'react-particles-js';
import Header from "./components/header";
import { Navbar } from './components/navbar';
import About from './components/about';
import Skills from './components/skills';
import Contact from './components/contact';
// import { ToastContainer, toast } from 'react-toastify';
import Container from "react-bootstrap/Container";
import Footer from './components/footer';
function App() {

  // const btnHndl = () => {
  //   toast.error("first message")
  // }

  return (
    <>
      {/* <ToastContainer /> */}
      {/* <Header /> */}
      {/* <Header title={'This is my first'} name={'React App'} /> */}
      <Particles className="particles-canvas" params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          }
        }
      }}
      />
      <Navbar />
      <Header />
      <Container className="container-box rounded">
        <About />
      </Container>
      <Container className="container-box rounded">
        <Skills />
      </Container>
      <Container className="container-box rounded">
        <Contact />
      </Container>
      <Footer />
      {/* <Button color='primary' outline onClick={btnHndl}>
        click me
      </Button> */}
    </>
  );

}

export default App;

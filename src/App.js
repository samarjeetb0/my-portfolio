// import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
//import { Header } from './components/header';
import Navbar from './components/navbar';
function App() {

  const btnHndl = () => {
    toast.error("first message")
  }

  return (
    <div>
      <ToastContainer />
      {/* <Header /> */}
      {/* <Header title={'This is my first'} name={'React App'} /> */}
      <Navbar />
      <Button color='primary' outline onClick={btnHndl}>
        click me
      </Button>
    </div>
  );

}

export default App;

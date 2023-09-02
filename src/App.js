// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [text, settext] = useState('dark')
  // const toggleMode = () => {
  //   if (mode === 'light') {
  //     setmode('dark')
  //     settext('light')
  //     document.body.style.backgroundColor = 'black'
  //     document.body.style.color = 'white'
  //     showAlert("Dark mode has been set", "success")
  //   }

  //   else if (mode === 'light' || mode === 'grey' || mode === 'red') {
  //     setmode('green')
  //     settext('black')
  //     document.body.style.backgroundColor = '#075407'
  //     document.body.style.color = 'black'
  //     showAlert("Green mode has been set", "success")
  //   }
  //   else if (mode === 'light' || mode === 'grey' || mode === 'green') {
  //     setmode('red')
  //     settext('white')
  //     document.body.style.backgroundColor = '#fa3b3b'
  //     document.body.style.color = 'white'
  //     showAlert("Red mode has been set", "success")
  //   }
  //   else {
  //     setmode('light')
  //     settext('dark')
  //     document.body.style.backgroundColor = 'white'
  //     document.body.style.color = 'black'
  //     showAlert("Light mode has been set", "success")
  //   }
  // }

  const toggleGrey = () => {
    setmode('grey')
    settext('white')
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
    showAlert("Grey mode has been set", "success")
  }

  const toggleGreen = () => {
    setmode('green')
    settext('black')
    document.body.style.backgroundColor = '#075407'
    document.body.style.color = 'black'
    showAlert("Green mode has been set", "success")
  }

  const toggleRed = () => {
    setmode('red')
    settext('white')
    document.body.style.backgroundColor = '#fa3b3b'
    document.body.style.color = 'white'
    showAlert("Red mode has been set", "success")
  }

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} text={text} toggleGrey={toggleGrey} toggleGreen={toggleGreen} toggleRed={toggleRed} />
        <Alert alert={alert} />
        <div className="container">

          {/* <Routes> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/" element={ */}
              <TextForm heading="Enter your text area" showAlert={showAlert} />
            {/* } /> */}
          {/* </Routes> */}

        </div>
      {/* </Router> */}
    </>
  );
}

export default App;

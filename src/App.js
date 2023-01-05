import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';


function App() {
  const [image, setImage] = useState('');
  useEffect(()=>{
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      setImage(response.data.message);
    })
    .catch(error => {
      console.log(error);
    });

    // axios.post('https://reqres.in/api/user', {'name':"John", 'job':"programmer"})
    // .then(response=>{
    //   console.log(response.data)
    // })
    // .catch(error=>{
    //   console.log(error)
    // });
    axios.get('https://reqres.in/api/users/2')
      .then(response=>
        console.log(response))
      .catch(error =>
        console.log(error));
    
    axios.put('https://reqres.in/api/users/2', {'name':"John", 'job':"baller"})
      .then(response=>{
        console.log(response.data)
      })
      .catch(error=>{
        console.log(error)
      });
    
    // axios.delete('https://reqres.in/api/users/2')
    //   .then(response=>
    //     console.log(response))
    //   .catch(error=>
    //     console.log(error));
  },[]);
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn 
        </a>
      </header>
    </div>
  );
}

export default App;

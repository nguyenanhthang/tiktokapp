import './App.css';
import {useState} from 'react'

function App() {
  const [name,setName]= useState('hello')
  const [age,setAge]= useState(0)
  const handleChange = (e) => {
    setName(e.target.value)
  }
  const handleChangeAge = (e) => {
    let curren = new Date()
    let getYear = curren.getUTCFullYear()
    let inputYear = e.target.value
    let resultYear = getYear - inputYear
    setAge(resultYear)
  }
  const show = () =>{
    return(
      handleChange
    )
  }
  return (
    <div className="App">
      <h2>Nhap ten</h2>
      <input placeholder="name" onChange={handleChange}/>
      <h2>Nhap Tuoi</h2>
      <input type="text" placeholder='nhap tuoi' onChange={handleChange}/>
      <h2>nhap dia chi</h2>
      <input placeholder="name" onChange={handleChange}/>
      <h2>Nhap so dien thoai</h2>
      <input type="text" placeholder='nhap tuoi' onChange={handleChange}/>
      <br />
      <button onClick={show}>dang nhap</button>
      <ul>
        <li>{show}</li>
      </ul>
    </div>
  );
}

export default App;

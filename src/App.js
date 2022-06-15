import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
//import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Items from './components/items';
import Buscador  from './components/Buscador';


function App() {
let [database, setDatabase] = useState([]);
let[firstURL,setFirstURL] = useState("https://wrk.acronex.com/api/challenge/machines?q=");
let[busqueda, setBusqueda] = useState("");

function buscarValor(e){
  if (e.charCode == 13) {
     busqueda=document.getElementById('inputSearch1').value; setearBusqueda(busqueda)
    }
}


function fectchAPI(url){ 
  debugger
  fetch(url)  
      .then((response)=> {return response.json()})
      .then((data) => { setDatabase(data) })
      .catch(err => alert(err))
}

function setearBusqueda(busquedaData){  
  debugger
  setFirstURL(`https://wrk.acronex.com/api/challenge/machines?q=${busquedaData}`)
  fectchAPI(firstURL)
}

useEffect(() => {
  setearBusqueda(busqueda)
}, []
)

function getDatafromChild(childData){
  setearBusqueda(childData)
}



  return (

    <div id="container" >
      <Buscador busqValor={getDatafromChild} />
      <table className="tablaSearch">
        <tbody>
            {
              database.map((item, index) => {
                
                while (index<=5){
                return (                  
                  <Items key={index}  descripcion={item.description} status={item.working} id={item.id} />                
                )
              }
              })
            }
          </tbody>
      </table>
      </div>
  );
}

export default App;

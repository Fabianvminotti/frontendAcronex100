import React, { useEffect, useState } from 'react';
import logo1 from '../image/unimap_blanco.svg';
import logo2 from '../image/logo35x35.png';

function Buscador(props){

  function buscarValor(e){
    if (e.charCode == 13) {
     // var busq = 
      props.busqValor(document.getElementById('inputSearch1').value) 
      e.preventDefault()
     }
    
  }     

        return (
          <div className='searchBar'>
            <div className='searchBarLogo'>
              <img id="logo2" src={logo2} />
              <img src={logo1} />
            </div>
            <div className='searchBarSearch'>
              <input id="inputSearch1" type="text" placeholder="&#61442;" onKeyPress={(e) => buscarValor(e)} />

            </div>
            <div className='searchBarMenu'>

            </div>
          </div>
        )
    

}
export default Buscador
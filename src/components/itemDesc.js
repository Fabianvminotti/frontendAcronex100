import React, { useEffect, useState } from 'react';
import './itemDesc.css';
import '../App.css';
import logo1 from '../image/unimap_blanco.svg';
import logo2 from '../image/logo35x35.png';
import {Link} from "react-router-dom";
import Buscador from './Buscador';


function ItemDesc(){
        let [database, setDatabase] = useState({})
        let[firstURL,setFirstURL] = useState("https://wrk.acronex.com/api/challenge/machines/")
        //let [lastIndex, setLastIndex] = useState(2)
        
        var pathMachine = window.location.pathname;
        var urlMachine = (pathMachine.substr(pathMachine.indexOf('/',3)+1,10));
        var batInt
        var batVec
        var dirVie
        var velVie
        var temp
        var humedad

        const fectchAPI = (url) => {   
            debugger           
          fetch(url)  
            .then(response=>  response.json())
            .then(data =>  setDatabase(data) )
            .then(data =>  asignarVariables(data) )
            .catch(err => alert(err))
           
        }
        
        useEffect(() => {
          fectchAPI(firstURL+urlMachine)
        }, [])
        
        const asignarVariables = ()=>{
            
            try{
                batInt =  database.data.General['Batería Interna']
                batVec =  database.data.General['Batería Vehiculo']
                temp = database.data.Clima.Temperatura
                humedad = database.data.Clima.Humedad
            }catch (e){
                console.log(e)
                batInt =  "Variable no encontrada"
                batVec =  "Variable no encontrada" 
                temp = "Variable no encontrada" 
                humedad = "Variable no encontrada" 
            }

            
        }

        function getDatafromChild2(dataChild2){


        }
       
        
        
        return(    
            <div className='container2'>
                    <Link to="/search">
                        <Buscador/>
                    </Link>
                         
                <div className='descContainer'>
                    
                    <div className='descHeaderNombre'>
                        {database.class} - {database.description}
                    </div>
                    <div className='descHeaderId'>
                        {database.id}
                    </div>
                    <div className='descBasicos'>
                        <div className='descTit1'>
                            Empresa
                        </div>
                        <div className='descDesc1'>
                            {database.company}
                        </div>
                            
                        <div className='descTit1'>
                            Clase
                        </div>
                        <div className='descDesc1'>
                            {database.class}
                        </div>

                        <div className='descTit1'>
                            Estado
                        </div>
                        <div className='descDesc1'>
                        {database.moving?<div className="statusGreen-small"></div>:<div className="statusRed-small"></div>} {database.working?"En movimiento":"Detenida"}
                        </div>

                        <div className='descTit1'>
                            Ultima actualizacion
                        </div>
                        <div className='descDesc1'>
                            {database.last_update}
                        </div>
                    </div>
                    <div className='descTablas'>
                        <table className='descTable'>
                            <tr>
                                <td colSpan="2" className='tablaTit2'>
                                    General
                                </td>
                            </tr>
                            <tr>
                                <td className='tdDescTabla'>
                                    Cosechando
                                </td>
                                <td className='tdDescTabla2'>
                                    {database.working?"si":"no"}
                                </td>
                            </tr>
                            <tr>
                                <td className='tdDescTabla'>
                                    Bateria Interna
                                </td>
                                <td className='tdDescTabla2'>
                                   {batInt}
                                </td>
                            </tr>
                            <tr>
                                <td className='tdDescTabla'>
                                    Bateria Vehiculo
                                </td>
                                <td className='tdDescTabla2'>
                                    {batVec}
                                </td>
                            </tr>
                            <tr>
                                <td className='tdDescTabla'>
                                    Uso Combustible
                                </td>
                                <td className='tdDescTabla2'>
                                    
                                </td>
                            </tr>
                        </table>


                        <table className='descTable'>
                            <tr>
                                <td colSpan="2" className='tablaTit2'>
                                    Clima
                                </td>
                            </tr>
                            <tr>
                                <td className='tdDescTabla'>
                                    Temperatura
                                </td>
                                <td className='tdDescTabla2'>
                                    {temp}
                                </td>
                            </tr>
                            <tr>
                                <td className='tdDescTabla'>
                                    Humedad
                                </td>
                                <td className='tdDescTabla2'>
                                {humedad}
                                </td>
                            </tr>
                            <tr>
                                <td className='tdDescTabla'>
                                    Direccion del viento
                                </td>
                                <td className='tdDescTabla2'>
                                    {dirVie}
                                </td>
                            </tr>
                            <tr>
                                <td className='tdDescTabla'>
                                    Velocidad del viento
                                </td>
                                <td className='tdDescTabla2'>
                                    {velVie}
                                </td>
                            </tr>
                        </table>

                        <table className='descTable'>
                            <tr>
                                <td colSpan="2" className='tablaTit2'>
                                    Operacion
                                </td>
                            </tr>
                            <tr>
                                <td className='tdDescTabla'>
                                    Velocidad
                                </td>
                                <td className='tdDescTabla2'>
                                    {/* {database.data.Operación.Velocidad} */}
                                </td>
                            </tr>
                            <tr>
                                <td className='tdDescTabla'>
                                    Presion
                                </td>
                                <td className='tdDescTabla2'>

                                </td>
                            </tr>
                            <tr>
                                <td className='tdDescTabla'>
                                    Producto/hectarea
                                </td>
                                <td className='tdDescTabla2'>

                                </td>
                            </tr>
                            <tr>
                                <td className='tdDescTabla'>
                                    Ancho
                                </td>
                                <td className='tdDescTabla2'>
                                    
                                </td>
                            </tr>
                        </table>
                        
                    </div>
                </div>
                </div> 

        )
    

}
export default ItemDesc